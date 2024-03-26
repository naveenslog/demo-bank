from django.db import models

from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from django.utils.translation import gettext_lazy as _

from django.contrib.auth.base_user import BaseUserManager

from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        """
        Create and save a user with the given account_no and password.
        """
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")
        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    username = models.CharField(
        _("username"),
        max_length=30,
        unique=True,
        null=True,
        blank=True,
        help_text=_(
            "Required. 30 characters or fewer. Letters, digits and " "@/./+/-/_ only."
        ),
        validators=[
            RegexValidator(
                r"^[\w.@+-]+$",
                _(
                    "Enter a valid username. "
                    "This value may contain only letters, numbers "
                    "and @/./+/-/_ characters."
                ),
                "invalid",
            ),
        ],
        error_messages={
            "unique": _("A user with that username already exists."),
        },
    )

    email = models.EmailField(unique=True, null=False, blank=False)
    contact_no = models.IntegerField(unique=True, blank=True, null=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email

    @property
    def account_no(self):
        if hasattr(self, "account"):
            return self.account.account_no
        return None

    @property
    def full_name(self):
        return "{} {}".format(self.first_name, self.last_name)

    @property
    def balance(self):
        if hasattr(self, "account"):
            return self.account.balance
        return None

    @property
    def full_address(self):
        if hasattr(self, "address"):
            return "{}, {}-{}, {}".format(
                self.address.street_address,
                self.address.city,
                self.address.postal_code,
                self.address.country,
            )
        return None


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Account(TimeStampedModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="accounts")
    balance = models.DecimalField(max_digits=12, decimal_places=2)
    account_number = models.CharField(max_length=20, unique=True)
    account_type = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.user.username} - {self.account_type} - {self.account_number}"


class Transaction(TimeStampedModel):
    transaction_type = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    account = models.ForeignKey(
        Account, on_delete=models.CASCADE, related_name="transactions"
    )
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        string = (
            f"{self.transaction_type} - {self.amount} - {self.account.account_number}"
        )
        return string


class Beneficiary(TimeStampedModel):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="beneficiaries"
    )
    nickname = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.user.username}'s Beneficiary"


# @receiver(post_save, sender=User)
# def create_user_account(sender, instance, created, **kwargs):
#     if created:
#         Account.objects.create(user=instance)
#         send_mail(
#             'Welcome to MockBank',
#             'Your account has been created.',
#             'from@example.com',
#             [instance.email],
#             fail_silently=False,
#         )
