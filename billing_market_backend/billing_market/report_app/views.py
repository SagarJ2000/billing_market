from rest_framework.views import APIView
from sales_app.models import Invoice, InvoiceProduct
from .serializers import InvoiceSerializers
from rest_framework.response import Response
from datetime import datetime

current_date = datetime.today()
current_date = current_date.strftime("%Y-%m-%d")

print(current_date)

class ReportAPIView(APIView):
    def post(self, request):
        date = request.data.get('date')
        start_date=request.data.get('start_date')
        end_date = request.data.get('end_date')
        print(date)
        try:
            if date:
                objs = Invoice.objects.filter(invoice_date=date)
                print("date=====",objs)
            elif start_date and end_date:

                objs = Invoice.objects.filter(invoice_date__gte = start_date, invoice_date__lte = end_date).order_by('invoice_date')
            else :
                objs = Invoice.objects.filter(invoice_date=current_date)


        except Invoice.DoesNotExist as e:
            return Response(data={"detail": "NOT FOUND"})
        serializer = InvoiceSerializers(objs, many=True)
        return Response(data=serializer.data)