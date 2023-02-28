from django.contrib import admin
from .models import Invoice, InvoiceProduct, Customer

class CustomerAdmin(admin.ModelAdmin):
    model = Customer
    list_display =['name','contact_number','address']


admin.site.register(Customer,CustomerAdmin)

class InvoiceAdmin(admin.ModelAdmin):
    model = Invoice
    list_display = ['Invoice_id','invoice_number','total_cost_without_gst','total_cost_with_gst','total_cost_with_offer_and_gst',
    'invoice_date','customer','invoice_created_by']


admin.site.register(Invoice,InvoiceAdmin)

class InvoiceProductAdmin(admin.ModelAdmin):
    model = InvoiceProduct
    list_display = ['invoice_product_id','invoice','product_invoice','invoice_product_quantity','invoice_product_cost_per_quantity',
    'invoice_product_cost_per_quantity_with_offer','invoice_product_total_cost','invoice_product_total_cost_with_gst','invoice_product_total_cost_with_offer']

    
admin.site.register(InvoiceProduct,InvoiceProductAdmin)
