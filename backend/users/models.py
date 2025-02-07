from django.db import models
from django.contrib.auth.models import AbstractUser
from .mangers import CustomUserManager
from core.utils import generate_id

# Create your models here.

class CustomUser(AbstractUser):
    objects=CustomUserManager()
    ROLE_CHOICES=[
        ('P', 'Patient'),
        ('D', 'Doctor'),
        ('DW', 'Desk Worker'),
        ('A', 'Admin'),

    ]
    id = models.CharField(
        primary_key=True,
        default=generate_id,
        max_length=8,
        editable=False,
        verbose_name="User ID",
    )

    role=models.CharField(verbose_name="Role", choices=ROLE_CHOICES ,default="P",max_length=2)

    @property
    def full_name(self):
        return f"{self.first_name} {self.last_name}"
