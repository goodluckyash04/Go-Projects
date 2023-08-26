from django.urls import path
from . import views

urlpatterns = [
    path("createuser/",views.CreateUser.as_view(),name="createuser"),
    path("getusers/",views.GetUser.as_view(),name="geteusers"),
    path("singleuser/",views.SingleUser.as_view(),name="singleuser"),
    path("login/",views.Login.as_view(),name="login"),

    path("createseller/",views.CreateSeller.as_view(),name="createseller"),
    path("sellerlogin/",views.SellerLogin.as_view(),name="sellerlogin"),
    path("addproduct/",views.AddProduct.as_view(),name="addproduct"),
    path("allproduct/",views.AllProduct.as_view(),name="allproduct"),
    path("myproducts/",views.MyProducts.as_view(),name="myproducts"),
]
