from django.db import models
from django.contrib.auth.models import AbstractBaseUser,PermissionsMixin
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager
from django.utils import timezone
from django.contrib.auth import get_user_model

class Buyer(AbstractBaseUser, PermissionsMixin):
    name = models.CharField(max_length=50)
    email = models.EmailField(_("email address"), unique=True)
    gender = models.CharField(max_length=50)
    password = models.CharField( max_length=50)
    age = models.IntegerField(default=1)
    address = models.TextField(max_length=250)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    date_joined = models.DateTimeField(default=timezone.now)
   
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    objects = CustomUserManager()

    def __str__(self):
        return self.email

class Cart(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)

