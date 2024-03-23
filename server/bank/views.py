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


class BeneficiaryViewSet(viewsets.ModelViewSet):
    queryset = Beneficiary.objects.all()
    serializer_class = BeneficiarySerializer
    permission_classes = [permissions.IsAuthenticated]


class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=["post"])
    def deposit(self, request, pk=None):
        account = self.get_object()
        amount = request.data.get("amount")
        # Assuming you have some validation for the amount
        Transaction.objects.create(
            account=account, transaction_type="deposit", amount=amount
        )
        account.balance += amount
        account.save()
        return Response({"status": "amount deposited"})

    @action(detail=True, methods=["post"])
    def withdraw(self, request, pk=None):
        account = self.get_object()
        amount = request.data.get("amount")
        # Assuming you have some validation for the amount
        if account.balance >= amount:
            Transaction.objects.create(
                account=account, transaction_type="withdraw", amount=-amount
            )
            account.balance -= amount
            account.save()
            return Response({"status": "amount withdrawn"})
        else:
            return Response(
                {"error": "Insufficient funds"}, status=status.HTTP_400_BAD_REQUEST
            )
