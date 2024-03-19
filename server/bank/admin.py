from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from bank.models import User, Account, Transaction
from django.utils.translation import gettext_lazy as _

class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        (_('Personal info'), {'fields': ('first_name', 'last_name', 'contact_no')}),
        (_('Permissions'), {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        (_('Important dates'), {'fields': ('last_login', 'date_joined')}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2'),
        }),
    )
    list_display = ('email', 'first_name', 'last_name', 'is_staff')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)

class AccountAdmin(admin.ModelAdmin):
    list_display = ('account_number', 'user', 'account_type', 'balance', 'created_at', 'updated_at')
    list_filter = ('account_type',)
    search_fields = ('account_number', 'user__email', 'user__username')
    ordering = ('-created_at',)

class TransactionAdmin(admin.ModelAdmin):
    list_display = ('transaction_type', 'amount', 'account', 'created_at', 'updated_at')
    list_filter = ('transaction_type', 'created_at')
    search_fields = ('account__account_number', 'account__user__email', 'account__user__username')
    ordering = ('-created_at',)

# Register your models here
admin.site.register(User, UserAdmin)
admin.site.register(Account, AccountAdmin)
admin.site.register(Transaction, TransactionAdmin)
