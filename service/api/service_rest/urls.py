from django.urls import path
from .views import list_technicians, list_appointments


urlpatterns = [
    path("technicians/<int:pk>/",list_technicians, name="list_technicians"),
    path("appointments/<int:pk>/",list_appointments, name="list_appointments"),
]
