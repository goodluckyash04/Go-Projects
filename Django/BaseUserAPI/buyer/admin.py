from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import Buyer,Cart


class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = Buyer
    list_display = ("email", "is_staff", "is_active",)
    list_filter = ("email", "is_staff", "is_active",)
    fieldsets = (
        (None, {"fields": ("email", "password","name","gender","age","address")}),
        ("Permissions", {"fields": ("is_active",)}),
    )
    add_fieldsets = (
        (None, {
            "classes": ("wide",),
            "fields": (
                "email", "password1",'password2', "name","gender","age","address"
            )}
        ),
    )
    search_fields = ("email",)
    ordering = ("email",)


admin.site.register(Buyer, CustomUserAdmin)
admin.site.register(Cart)