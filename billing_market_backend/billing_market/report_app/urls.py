from django.urls import path
from .views import DailyReportAPIView

urlpatterns = [
    path('daily/',DailyReportAPIView.as_view())
]