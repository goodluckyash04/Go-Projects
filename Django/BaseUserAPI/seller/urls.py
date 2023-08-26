from django.urls import path
from . import views

urlpatterns = [
    path("createseller/",views.CreateSeller.as_view(),name="createseller"),
    path("sellerlogin/",views.SellerLogin.as_view(),name="sellerlogin"),
    path("addproduct/",views.AddProduct.as_view(),name="addproduct"),
    path("allproduct/",views.AllProduct.as_view(),name="allproduct")
]

