from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import Buyer

class CreateUser(APIView):

    def post(self,request):
        d1 =request.data
        serdata = UserSerializer(data=d1)
        if serdata.is_valid():
            serdata.save()
            user = Buyer.objects.get(email = serdata.data['email'])
            token, created = Token.objects.get_or_create(user = user)
            return Response({'data':serdata.data,"token":token.key},status=status.HTTP_201_CREATED)
        else:
            return Response(serdata.errors)

class GetUser(APIView):

    def get(self,request):
        all_user = Buyer.objects.all()
        users = UserSerializer(all_user,many = True)
        return Response(users.data)
    
class SingleUSer(APIView):

    def get(self,request):
        pk = request.data 
        all_user = Buyer.objects.filter(token = pk['token'])
        users = UserSerializer(all_user,many = True)
        return Response(users.data)

class Login(APIView):

    def post(self,request):
        d1 =request.data
        try:
            user = Buyer.objects.get(email = d1['email'])
            ser_user = LoginSerializer(user)
            if user.password == d1['password']:
                token, created = Token.objects.get_or_create(user = user)
                
                return Response(data ={'msg':"Login Successful",'token':token.key},status=status.HTTP_200_OK)
            else:
                return Response(data ={'msg':"Invalid Credential"},status=status.HTTP_400_BAD_REQUEST)
        except:
             return Response(data ={'msg':"User not found"},status=status.HTTP_404_NOT_FOUND)