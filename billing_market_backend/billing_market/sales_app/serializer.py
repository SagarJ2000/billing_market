from rest_framework import serializers
from.models import Customer, Invoice, InvoiceProduct

class InvoiceProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvoiceProduct
        exclude = ['invoice',]


class InvoiceSerializer(serializers.ModelSerializer):
    product_in_invoice = InvoiceProductSerializer(read_only=True, many=True)
    products = InvoiceProductSerializer(write_only=True,many=True)
    invoice_created_by = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = InvoiceProduct
        #fields = ['invoice_id', 'invoice_number', 'total_cost_without_gst', 'total_cost_with_gst', 'total_cost_with_offer_and_gst', 'invoice_date', 'customer', 'invoice_created_by', 'product_in_invoice', 'products']
        #exclude = ['customer',]
        fields = '__all__'
    def create(self, validated_data):
        invoiceproducts_data = validated_data.pop('products')
        print(invoiceproducts_data)
        invoice = Invoice.objects.create(**validated_data)
        for invoiceproduct_data in invoiceproducts_data:
            InvoiceProduct.objects.create(invoice=invoice, **invoiceproduct_data)
        return invoice


class CustomerSerializer(serializers.ModelSerializer):
    customer_invoice = InvoiceSerializer(read_only=True,many=True)
    invoices = InvoiceSerializer(write_only=True, many=True)

    class Meta:
        model = Customer
        #fields = ['name', 'contact_number', 'address', 'customer_invoice', 'invoices']
        fields = '__all__'
    def create(self, validated_data):
        
        invoices_data = validated_data.pop('invoices')
        customer = Customer.objects.create(**validated_data)
        for invoice_data in invoices_data:
            print(invoice_data)
            products = invoice_data.pop('products')
            obj = Invoice.objects.create(customer=customer, **invoice_data)
            for product in products:
                InvoiceProduct.objects.create(invoice=obj, **product)
        return customer