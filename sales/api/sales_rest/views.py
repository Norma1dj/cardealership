from django.shortcuts import render
from common.json import ModelEncoder
from .models import Salesperson, Customer, Sale

# Create your views here.

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        'first_name',
        'last_name',
        'employee_id',
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        'first_name',
        'last_name',
        'address',
        'phone_number',
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        'price',
    ]


    def get_extra_data(self, o):
        return {
            "customer": {
                "first_name": o.customer.first_name,
                "last_name": o.customer.last_name,
                "address": o.customer.address,
                "phone_number": o.customer.phone_number,
            },
            "automobile": {
                "sold": o.automobile.sold,
                "vin": o.automobile.vin,
            },
            "salesperson": {
                "first_name": o.salesperson.first_name,
                "last_name": o.salesperson.last_name,
                "employee_id": o.salesperson.employee_id,
            }
        }