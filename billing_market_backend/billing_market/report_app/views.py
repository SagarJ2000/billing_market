from rest_framework.views import APIView
from sales_app.models import Invoice, InvoiceProduct
from .serializers import InvoiceSerializers
from rest_framework.response import Response
from datetime import datetime

current_date = datetime.today()
current_date = current_date.strftime("%Y-%m-%d")

print(current_date)

class DailyReportAPIView(APIView):
    def get(self, request):
        try:
            objs = Invoice.objects.filter(invoice_date=current_date)
            print(objs)
        except Invoice.DoesNotExist as e:
            return Response(data={"detail": "NOT FOUND"})
        serializer = InvoiceSerializers(objs, many=True)
        return Response(data=serializer.data)