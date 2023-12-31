# Generated by Django 4.1.7 on 2023-03-06 04:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('buyer', '0004_buyer_is_superuser'),
    ]

    operations = [
        migrations.CreateModel(
            name='Seller',
            fields=[
                ('buyer_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'abstract': False,
            },
            bases=('buyer.buyer',),
        ),
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('image', models.FileField(default='defaultprouct.jpeg', upload_to='product_pics')),
                ('price', models.FloatField(default=1.0)),
                ('quantity', models.IntegerField(default=0)),
                ('category', models.CharField(choices=[('F', 'Fruits'), ('V', 'Vegetables'), ('S', 'Seeds'), ('Ft', 'Fertilizers')], max_length=50)),
                ('seller', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='seller.seller')),
            ],
        ),
    ]
