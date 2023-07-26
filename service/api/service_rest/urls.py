from django.urls import path
from .views import list_technicians, list_appointments, list_automobiles


urlpatterns = [
    path("technicians/",list_technicians, name="list_technicians"),
    path("technicians/<int:id>/",list_technicians, name="list_technicians"),
    path("appointments/",list_appointments, name="list_appointments"),
    path("automobiles/",list_automobiles, name="list_automobiles"),
]
