from django.db import models
from django.contrib.auth.models import AbstractUser,PermissionsMixin,User
from datetime import date
from .mangers import CustomUserManager

# Create your models here.

class CustomUser(AbstractUser):
    objects=CustomUserManager()
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]
    ROLE_CHOICES=[
        ('P', 'Patient'),
        ('D', 'Doctor'),
        ('DW', 'Desk Worker'),
        ('A', 'Admin'),

    ]
    BLOOD_GROUPS = [
        ("A+", "A+"),
        ("A-", "A-"),
        ("B+", "B+"),
        ("B+", "B+"),
        ("AB+", "AB+"),
        ("AB-", "AB-"),
        ("O+", "O+"),
        ("O-", "O-"),
    ]
    role=models.CharField(verbose_name="Role", choices=ROLE_CHOICES ,default="P",max_length=2)
    phone_number =models.CharField(verbose_name="Phone Number",max_length=10,null=True,blank=True)
    dob=models.DateField(verbose_name="Date of Birth",null=True,blank=True)
    gender=models.CharField(choices=GENDER_CHOICES,max_length=1,null=True,blank=True)
    @property
    def age(self):
        if self.dob is None:
            return None

        today = date.today()
        age = today.year - self.dob.year
        if today.month < self.dob.month or (today.month == self.dob.month and today.day < self.dob.day):
            age -= 1
        return age
    blood_group=models.CharField(verbose_name="Blood Group",choices=BLOOD_GROUPS,max_length=3)
