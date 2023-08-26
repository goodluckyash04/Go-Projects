from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import *
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .models import Seller

class CreateSeller(APIView):

    def post(self,request):
        d1 =request.data
        serdata = SellerSerializer(data=d1)
        if serdata.is_valid():  
            serdata.save()
            # seller = Seller.objects.get(email = serdata.data['email'])
            return Response({'data':serdata.data},status=status.HTTP_201_CREATED)
        else:
            return Response(serdata.errors)
        
class SellerLogin(APIView):

    def post(self,request):
        d1 =request.data
        try:
            seller = Seller.objects.get(email = d1['email'])
            ser_user = SellerLoginSerializer(seller)
            if seller.password == d1['password']:
                # token, created = Token.objects.get_or_create(user = user)
                
                return Response(data ={'msg':"Login Successful",'email':ser_user.data['email']},status=status.HTTP_200_OK)
            else:
                return Response(data ={'msg':"Invalid Credential"},status=status.HTTP_400_BAD_REQUEST)
        except:
             return Response(data ={'msg':"User not found"},status=status.HTTP_404_NOT_FOUND)
        

class AddProduct(APIView):
    def post(self,request):
        try:
            data= request.data
            ser_pro = ProductSerializer(data = data)
            if ser_pro.is_valid():
                image = ser_pro.data['image'].split("\\")
                print(image)
                print(ser_pro)
                ser_pro.image = image[-1]
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
