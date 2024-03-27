# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, AccountViewSet, TransactionViewSet, BeneficiaryViewSet

router = DefaultRouter()
router.register(r"users", UserViewSet)
router.register(r"accounts", AccountViewSet)
router.register(r"transactions", TransactionViewSet, basename="transactions")
router.register(r"beneficiaries", BeneficiaryViewSet)

urlpatterns = [
    path(
        "transactions/deposit/",
        TransactionViewSet.as_view({"post": "deposit"}),
        name="transaction-deposit",
    ),
    path(
        "transactions/withdraw/",
        TransactionViewSet.as_view({"post": "withdraw"}),
        name="transaction-withdraw",
    ),
    path(
        "transactions/transfer/",
        TransactionViewSet.as_view({"post": "transfer"}),
        name="transaction-transfer",
    ),
    path(
        "accounts/verify/",
        AccountViewSet.as_view({"get": "verify"}),
        name="account-verify",
    ),
    path(
        "accounts/check-balance/",
        AccountViewSet.as_view({"get": "check_balance"}),
        name="account-check_balance",
    ),
    path("", include(router.urls)),
]
