# views.py

from rest_framework import viewsets, status, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from bank.serializers import (
    UserSerializer,
    AccountSerializer,
    TransactionSerializer,
    BeneficiarySerializer,
)
from bank.models import Account, Transaction, Beneficiary
from django.contrib.auth import get_user_model, authenticate
from django.core.validators import DecimalValidator
from django.core.exceptions import ValidationError
from decimal import Decimal

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    @action(detail=False, methods=["post"])
    def login(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = authenticate(email=email, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response(
                {"refresh": str(refresh), "access": str(refresh.access_token)}
            )
        else:
            return Response(
                {"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED
            )

    @action(detail=False, methods=["post"])
    def register(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            refresh = RefreshToken.for_user(user)
            return Response(
                {"refresh": str(refresh), "access": str(refresh.access_token)},
                status=status.HTTP_201_CREATED,
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AccountViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = AccountSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=False, methods=["get"])
    def verify(self, request):
        account_number = request.query_params.get("account")
        account_exists = Account.objects.filter(account_number=account_number).exists()
        if account_exists:
            account_user = Account.objects.get(account_number=account_number).user
            username = account_user.username
            return Response({"exists": True, "username": username})
        else:
            return Response({"exists": False})
    
    @action(detail=False, methods=["get"])
    def check_balance(self, request):
        user_accounts = Account.get_user_accounts(request.user)
        serialized_accounts = AccountSerializer(user_accounts)
        return Response(serialized_accounts.data)


class BeneficiaryViewSet(viewsets.ModelViewSet):
    queryset = Beneficiary.objects.all()
    serializer_class = BeneficiarySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        queryset = Beneficiary.objects.filter(user=user)
        return queryset

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        account_number = request.data.get("account")
        nickname = request.data.get("nickname")

        if not account_number or not nickname:
            return Response(
                {"error": "Account number and nickname are required."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        account = Account.objects.filter(account_number=account_number)
        account_exists = account.exists()
        if not account_exists:
            return Response(
                {"error": "Account does not exist."},
                status=status.HTTP_404_NOT_FOUND,
            )

        account = account.first()
        user = request.user
        if account.user == user:
            return Response(
                {"error": "You cannot add your own account as a beneficiary."},
                status=status.HTTP_400_BAD_REQUEST,
            )

        beneficiary = Beneficiary.objects.create(
            account=account,
            nickname=nickname,
            user=user,
        )

        serializer = self.get_serializer(beneficiary)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]
    lookup_field = "pk"

    def get_queryset(self):
        user = self.request.user
        queryset = Transaction.objects.filter(account__user=user)
        return queryset

    def get_object(self):
        queryset = self.filter_queryset(self.get_queryset())
        # make sure to catch 404's below
        obj = queryset.get(pk=self.request.user.id)
        self.check_object_permissions(self.request, obj)
        return obj

    def deposit_in_account(self, account, amount, description):
        Transaction.objects.create(
            account=account,
            transaction_type="credit",
            amount=amount,
            description=description,
        )
        account.balance += amount
        account.save()

    def withdraw_from_account(self, account, amount, description):
        if account.balance > amount:
            Transaction.objects.create(
                account=account,
                transaction_type="debit",
                amount=amount,
                description=description,
            )

            account.balance -= amount
            account.save()
        else:
            return Response(
                {"error": "Insufficient Funds..!"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    @action(detail=True, methods=["post"])
    def deposit(self, request, pk=None):
        amount = request.data.get("amount")
        description = request.data.get("description")
        account_id = request.data.get("account")

        # Validate account_id
        try:
            account_id = int(account_id)
        except ValueError:
            return Response(
                {"error": "Account ID must be an integer"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Validate amount
        try:
            amount = Decimal(amount)
        except ValueError:
            return Response(
                {"error": "Amount must be a decimal or integer"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        account = Account.objects.filter(account_number=account_id).first()
        if not account:
            return Response(
                {"error": "Account not found"}, status=status.HTTP_404_NOT_FOUND
            )

        try:
            self.deposit_in_account(account, amount, description)
            return Response({"status": "Amount Deposited"})
        except:
            return Response(
                {"error": "Internal Server Error !"}, status=status.HTTP_400_BAD_REQUEST
            )
        # Assuming you have some validation for the amount
        # Transaction.objects.create(
        #     account=account,
        #     transaction_type="credit",
        #     amount=amount,
        #     description=description,
        # )
        # account.balance += amount
        # account.save()
        # return Response({"status": "Amount Deposited"})

    @action(detail=True, methods=["post"])
    def transfer(self, request, pk=None):
        amount = request.data.get("amount")
        beneficiary_id = request.data.get("beneficiary")

        # Validate amount
        try:
            amount = Decimal(amount)
        except ValueError:
            return Response(
                {"error": "Amount must be a decimal or integer"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Validate beneficiary_id
        try:
            beneficiary_id = int(beneficiary_id)
        except ValueError:
            return Response(
                {"error": "Beneficiary ID must be an integer"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        beneficiary = Beneficiary.objects.filter(id=beneficiary_id).first()
        if not beneficiary:
            return Response(
                {"error": "Beneficiary not found"}, status=status.HTTP_404_NOT_FOUND
            )

        try:
            self.deposit_in_account(
                account=beneficiary.account,
                amount=amount,
                description=f"Amount credited by {request.user.username}",
            )

            account = Account.objects.filter(user=request.user).first()
            self.withdraw_from_account(
                account=account,
                amount=amount,
                description=f"Amount Transferred to {beneficiary.account.user.username}",
            )
            return Response({"status": "Amount Transferred"})
        except:
            return Response(
                {"error": "Internal Server Error"},
                status=status.HTTP_400_BAD_REQUEST,
            )

    @action(detail=True, methods=["post"])
    def withdraw(self, request, pk=None):
        account = self.get_object()
        amount = request.data.get("amount")
        # Assuming you have some validation for the amount
        if account.balance >= amount:
            Transaction.objects.create(
                account=account, transaction_type="debit", amount=-amount
            )
            account.balance -= amount
            account.save()
            return Response({"status": "amount withdrawn"})
        else:
            return Response(
                {"error": "Insufficient funds"}, status=status.HTTP_400_BAD_REQUEST
            )
