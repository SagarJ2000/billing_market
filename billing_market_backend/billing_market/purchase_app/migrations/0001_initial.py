# Generated by Django 4.1.7 on 2023-02-23 05:27

from django.db import migrations, models
import django.db.models.deletion
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('stocks_app', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('order_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('order_number', models.CharField(editable=False, max_length=10, unique=True)),
                ('order_total_cost_without_gst', models.FloatField(default=0)),
                ('order_total_cost_with_gst', models.FloatField(default=0)),
                ('order_status', models.CharField(choices=[('Pending', 'Pending'), ('Delivered', 'Deliveried')], default='Pending', max_length=10)),
                ('order_date', models.DateField(auto_now_add=True)),
                ('order_delivery_date', models.DateField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vendors',
            fields=[
                ('vendor_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('vendor_name', models.CharField(max_length=100)),
                ('vendor_information', models.TextField()),
                ('vendor_contact', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region='IN', unique=True)),
                ('vendor_gst_number', models.CharField(max_length=15)),
            ],
        ),
        migrations.CreateModel(
            name='OrderProduct',
            fields=[
                ('order_product_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('order_product_quantity', models.FloatField(default=1)),
                ('order_product_cost_per_quantity', models.FloatField(default=0)),
                ('order_product_total_cost', models.FloatField(default=0)),
                ('order_product_total_cost_with_gst', models.FloatField(default=0)),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='product_in_order', to='purchase_app.order')),
                ('product_order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='order_list', to='stocks_app.product')),
            ],
        ),
        migrations.AddField(
            model_name='order',
            name='vendors',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='vendors_order', to='purchase_app.vendors'),
        ),
    ]
