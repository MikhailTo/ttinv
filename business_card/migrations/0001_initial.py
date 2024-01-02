# Generated by Django 4.2.6 on 2024-01-02 09:44

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Benefits',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('subtitle', models.CharField(max_length=148)),
                ('image', models.FileField(blank=True, default='default/no-image.svg', null=True, upload_to='images/%Y/%m/%d/', validators=[django.core.validators.FileExtensionValidator(['svg'])])),
            ],
            options={
                'verbose_name': 'Преимущества',
                'verbose_name_plural': 'Преимущества',
            },
        ),
        migrations.CreateModel(
            name='Brands',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('image', models.FileField(blank=True, default='default/no-image.svg', null=True, upload_to='images/%Y/%m/%d/', validators=[django.core.validators.FileExtensionValidator(['svg', 'png', 'jpg', 'webp'])])),
            ],
            options={
                'verbose_name': 'Бренды',
                'verbose_name_plural': 'Бренды',
            },
        ),
        migrations.CreateModel(
            name='Delivery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('name', models.CharField(blank=True, max_length=64)),
                ('image', models.FileField(blank=True, default='default/no-image.svg', null=True, upload_to='images/%Y/%m/%d/', validators=[django.core.validators.FileExtensionValidator(['svg', 'png', 'jpg', 'webp'])])),
                ('path', models.CharField(blank=True, max_length=64)),
                ('link', models.CharField(blank=True, max_length=128)),
            ],
            options={
                'verbose_name': 'Доставка',
                'verbose_name_plural': 'Доставка',
            },
        ),
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=64)),
                ('subtitle', models.CharField(blank=True, max_length=512)),
                ('image', models.FileField(blank=True, default='default/no-image.svg', null=True, upload_to='images/%Y/%m/%d/', validators=[django.core.validators.FileExtensionValidator(['svg', 'png', 'jpg', 'webp'])])),
            ],
            options={
                'verbose_name': 'Продукция',
                'verbose_name_plural': 'Продукция',
            },
        ),
        migrations.CreateModel(
            name='Request',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=64)),
                ('phone', models.CharField(blank=True, max_length=148)),
                ('inn', models.CharField(max_length=148)),
                ('email', models.CharField(blank=True, max_length=148)),
                ('message', models.TextField(max_length=512)),
            ],
            options={
                'verbose_name': 'Запросы',
                'verbose_name_plural': 'Запросы',
            },
        ),
        migrations.CreateModel(
            name='Requisites',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=128, verbose_name='Наименование реквизита')),
                ('value', models.CharField(blank=True, max_length=128, verbose_name='Содержание реквизита')),
            ],
            options={
                'verbose_name': 'Реквизиты',
                'verbose_name_plural': 'Реквизиты',
            },
        ),
    ]
