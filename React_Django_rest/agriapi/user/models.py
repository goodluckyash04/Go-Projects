from django.db import models
from django.db import models
from django.contrib.auth.models import AbstractBaseUser , BaseUserManager

class UserAccountManager(BaseUserManager):
	def create_user(self , email , password = None):
		if not email or len(email) <= 0 :
			raise ValueError("Email field is required !")
		if not password :
			raise ValueError("Password is must !")
		
		user = self.model(
			email = self.normalize_email(email) ,
		)
		user.set_password(password)
		user.save(using = self._db)
		return user
	
	def create_superuser(self , email , password):
		user = self.create_user(
			email = self.normalize_email(email) ,
			password = password
		)
		user.is_admin = True
		user.is_staff = True
		user.is_superuser = True
		user.save(using = self._db)
		return user
	
class UserAccount(AbstractBaseUser):
	class Types(models.TextChoices):
		BUYER = "BUYER" , "buyer"
		SELLER = "SELLER" , "seller"
		
	type = models.CharField(max_length = 8 , choices = Types.choices ,
							default = Types.BUYER)
	email = models.EmailField(max_length = 200 , unique = True)
	name = models.CharField(max_length=250)
	is_active = models.BooleanField(default = True)
	is_admin = models.BooleanField(default = False)
	is_staff = models.BooleanField(default = False)
	is_superuser = models.BooleanField(default = False)
	
	# special permission which define that
	# the new user is teacher or student
	is_buyer = models.BooleanField(default = False)
	is_seller = models.BooleanField(default = False)
	
	USERNAME_FIELD = "email"
	
	# defining the manager for the UserAccount model
	objects = UserAccountManager()
	
	def __str__(self):
		return str(self.email)
	
	def has_perm(self , perm, obj = None):
		return self.is_admin
	
	def has_module_perms(self , app_label):
		return True
	
	def save(self , *args , **kwargs):
		if not self.type or self.type == None :
			self.type = UserAccount.Types.BUYER
		return super().save(*args , **kwargs)
	


class BuyerManager(models.Manager):
    def create_user(self , email , password = None):
        if not email or len(email) <= 0 :
            raise ValueError("Email field is required !")
        if not password :
            raise ValueError("Password is must !")
        email = email.lower()
        user = self.model(
            email = email
        )
        user.set_password(password)
        user.save(using = self._db)
        return user

    def get_queryset(self , *args, **kwargs):
        queryset = super().get_queryset(*args , **kwargs)
        queryset = queryset.filter(type = UserAccount.Types.BUYER)
        return queryset	
        
class Buyer(UserAccount):
	class Meta :
		proxy = True
	objects = BuyerManager()
	
	def save(self , *args , **kwargs):
		self.type = UserAccount.Types.BUYER
		self.is_buyer = True
		return super().save(*args , **kwargs)
	
class SellerManager(models.Manager):
	def create_user(self , email , password = None):
		if not email or len(email) <= 0 :
			raise ValueError("Email field is required !")
		if not password :
			raise ValueError("Password is must !")
		email = email.lower()
		user = self.model(
			email = email
		)
		user.set_password(password)
		user.save(using = self._db)
		return user
		
	def get_queryset(self , *args , **kwargs):
		queryset = super().get_queryset(*args , **kwargs)
		queryset = queryset.filter(type = UserAccount.Types.SELLER)
		return queryset
	
class Seller(UserAccount):
	class Meta :
		proxy = True
	objects = SellerManager()
	
	def save(self , *args , **kwargs):
		self.type = UserAccount.Types.SELLER
		self.is_seller = True
		return super().save(*args , **kwargs)
	


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
