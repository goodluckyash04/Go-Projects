from django.db import models
from django.utils.translation import gettext_lazy as _
from buyer.models import Buyer
from django.utils import timezone


class Seller(Buyer):
    gender = None
    age = None
    address = None



class Product(models.Model):
    cat = [("F","Fruits"),
           ("V","Vegetables"),
           ("S","Seeds"),
           ("Ft","Fertilizers")]
    title = models.CharField(max_length=50)
    image = models.FileField(upload_to='product_pics', default="defaultprouct.jpeg")
    price= models.FloatField(default=1.0)
    quantity = models.IntegerField(default=0)
    category  = models.CharField( max_length=50,choices=cat)
    seller = models.ForeignKey(Seller, on_delete=models.CASCADE)

    def __str__(self):
        return self.title