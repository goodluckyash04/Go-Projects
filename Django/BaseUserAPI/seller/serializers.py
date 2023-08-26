from rest_framework import serializers
from .models import *

class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields =['name','email','password']

class SellerLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Seller
        fields = ['email','password']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'