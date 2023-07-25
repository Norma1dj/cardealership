from django.urls import path
from .views import api_sale_list, api_customer_list, api_salesperson_list





urlpatterns = [
    path("sales/", api_sale_list, name="api_sale_list"),
    path("sales/<int:pk>/", api_sale_list, name="api_sale_list"),
    path("customers/", api_customer_list, name="api_customer_list"),
    path("customers/<int:pk>/", api_customer_list, name="api_customer_list"),
    path("salespeople/", api_salesperson_list, name="api_salesperson_list"),

    

]