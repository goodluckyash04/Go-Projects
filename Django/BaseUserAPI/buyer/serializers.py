from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = '__all__'
    
    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(UserSerializer, self).create(validated_data)

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Buyer
        fields = ['email','password']
