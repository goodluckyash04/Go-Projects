# Generated by Django 4.1.5 on 2023-02-03 04:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('seller', '0003_rename_shop_name_seller_shop_name'),
    ]

    operations = [
        migrations.RenameField(
            model_name='seller',
            old_name='pic',
            new_name='profile_pic',
        ),
    ]
