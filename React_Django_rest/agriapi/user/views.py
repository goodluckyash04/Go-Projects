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
    
class SingleUser(APIView):

    def get(self,request):
        # user = Token.objects.get(key=request.headers['Authorization']).user_id       #to get userid......
        user = Token.objects.get(key=request.headers['auth-token']).user
        ser_data = SingleUserSerializer(user,many = False)
        return Response(ser_data.data)

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





class CreateSeller(APIView):

    def post(self,request):
        d1 =request.data
        serdata = SellerSerializer(data=d1)
        if serdata.is_valid():  
            serdata.save()
            seller = Seller.objects.get(email = serdata.data['email'])
            token, created = Token.objects.get_or_create(user = seller)
            return Response({'data':serdata.data,"token":token.key},status=status.HTTP_201_CREATED)
           
        else:
            return Response(serdata.errors)
        
class SellerLogin(APIView):

    def post(self,request):
        d1 =request.data
        try:
            seller = Seller.objects.get(email = d1['email'])
            ser_user = SellerLoginSerializer(seller)
            if seller.password == d1['password']:
                token, created = Token.objects.get_or_create(user = seller)
                
                return Response(data ={'msg':"Login Successful",'token':token.key},status=status.HTTP_200_OK)
            else:
                return Response(data ={'msg':"Invalid Credential"},status=status.HTTP_400_BAD_REQUEST)
        except:
             return Response(data ={'msg':"User not found"},status=status.HTTP_404_NOT_FOUND)
        

class AddProduct(APIView):
    def post(self,request):
        try:
            data= request.data
            ser_pro = ProductSerializer(data = data)
            seller = Token.objects.get(key=request.headers['auth-token']).user
            ser_pro.seller = seller
            if ser_pro.is_valid():
                ser_pro.save()
                return Response({'data':ser_pro.data},status=status.HTTP_201_CREATED)
            else:
                return Response(ser_pro.errors)
        except:
            return Response(ser_pro.errors)

class AllProduct(APIView):
    def get(self,request):
        product = Product.objects.all()
        ser_pro = ProductSerializer(product, many = True)
        return Response({'data':ser_pro.data},status=status.HTTP_201_CREATED)
    
class MyProducts(APIView):
    def get(self,request):
        seller = Token.objects.get(key=request.headers['auth-token']).user
        product = Product.objects.filter(seller = seller)
        ser_pro = ProductSerializer(product, many = True)
        return Response({'data':ser_pro.data},status=status.HTTP_201_CREATED)
