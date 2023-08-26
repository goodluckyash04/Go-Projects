from django.contrib import admin
from .models import *

admin.site.register(UserAccount),
admin.site.register(Buyer),
admin.site.register(Seller),
admin.site.register(Product),