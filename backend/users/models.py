from django.db import models
from django.contrib.auth.models import AbstractUser,PermissionsMixin,User
from datetime import date
from .mangers import CustomUserManager

# Create your models here.

class CustomUser(AbstractUser):
    objects=CustomUserManager()
    ROLE_CHOICES=[
        ('P', 'Patient'),
        ('D', 'Doctor'),
        ('DW', 'Desk Worker'),
        ('A', 'Admin'),

    ]
    
    role=models.CharField(verbose_name="Role", choices=ROLE_CHOICES ,default="P",max_length=2)
