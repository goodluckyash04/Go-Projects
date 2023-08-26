from django.urls import path
from . import views

urlpatterns = [
    path("createuser/",views.CreateUser.as_view(),name="createuser"),
    path("getusers/",views.GetUser.as_view(),name="geteusers"),
    path("login/",views.Login.as_view(),name="login")
]
