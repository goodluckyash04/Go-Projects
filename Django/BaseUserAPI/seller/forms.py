from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Seller


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Seller
        fields = ("email",)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = Seller
        fields = ("email",)