from django.urls import path
from .views import ReportAPIView

urlpatterns = [
    path('daily/',ReportAPIView.as_view())
]