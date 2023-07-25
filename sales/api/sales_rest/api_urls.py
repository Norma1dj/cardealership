from django.urls import path
from .views import api_sale_list, api_customer_list





urlpatterns = [
    path("sales/", api_sale_list, name="api_sale_list"),
    path("sales/<int:pk>/", api_sale_list, name="api_sale_list"),
    path("customers/", api_customer_list, name="api_customer_list"),

]