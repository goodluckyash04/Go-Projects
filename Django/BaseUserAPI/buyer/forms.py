from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from .models import Buyer


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = Buyer
        fields = ("email",)


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = Buyer
        fields = ("email",)