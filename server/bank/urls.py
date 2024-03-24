# urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UserViewSet, AccountViewSet, TransactionViewSet, BeneficiaryViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'accounts', AccountViewSet)
router.register(r'transactions', TransactionViewSet)
router.register(r'beneficiaries', BeneficiaryViewSet)

urlpatterns = [
    path('', include(router.urls)),
]