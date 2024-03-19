from rest_framework import serializers
from .models import User, Account, Transaction


class UserSerializer(serializers.ModelSerializer):
    account_no = serializers.ReadOnlyField()
    full_name = serializers.ReadOnlyField()
    balance = serializers.ReadOnlyField()
    full_address = serializers.ReadOnlyField()

    class Meta:
        model = User
        fields = [
            "id",
            "username",
            "email",
            "contact_no",
            "account_no",
            "full_name",
            "balance",
            "full_address",
        ]
        read_only_fields = ["id", "account_no", "balance", "full_address"]
        extra_kwargs = {
            "username": {
                "validators": []
            },
        }


class AccountSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Account
        fields = [
            "id",
            "user",
            "balance",
            "account_number",
            "account_type",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]


class TransactionSerializer(serializers.ModelSerializer):
    account = AccountSerializer(read_only=True)

    class Meta:
        model = Transaction
        fields = [
            "id",
            "transaction_type",
            "amount",
            "account",
            "description",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]


EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.your_email_service.com'
EMAIL_USE_TLS = True
EMAIL_PORT = 587
EMAIL_HOST_USER = 'your_email@example.com'
EMAIL_HOST_PASSWORD = 'your_email_password'
