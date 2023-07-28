from django.shortcuts import render
from common.json import ModelEncoder
from .models import Salesperson, Customer, Sale, AutomobileVO
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json

# Create your views here.

class SalespersonListEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        'first_name',
        'last_name',
        'employee_id',
        'id'
    ]

class CustomerListEncoder(ModelEncoder):
    model = Customer
    properties = [
        'first_name',
        'last_name',
        'address',
        'phone_number',
        'id'
    ]

class SaleListEncoder(ModelEncoder):
    model = Sale
    properties = [
        'price',
        'id'
    ]


    def get_extra_data(self, o):
        return {
            "customer": {
                "first_name": o.customer.first_name,
                "last_name": o.customer.last_name,
                "address": o.customer.address,
                "phone_number": o.customer.phone_number,
                "id": o.customer.id,
            },
            "automobile": {
                "sold": o.automobile.sold,
                "vin": o.automobile.vin,
            },
            "salesperson": {
                "first_name": o.salesperson.first_name,
                "last_name": o.salesperson.last_name,
                "employee_id": o.salesperson.employee_id,
            },

            "price": str(o.price), 
        }

@require_http_methods(["GET", "POST", "DELETE"])
def api_customer_list(request, pk=None):

    #GET list of all the customers
    if request.method == "GET":
        try:
            customers = Customer.objects.all()
            return JsonResponse(
                {"customers": customers},
                encoder=CustomerListEncoder
            )
        except:
            response = JsonResponse({"message":"Could not list customers"})
            response.status_code = 400
            return response
    #Get list of all the customers

    #DELETE a single customer
    elif request.method == "DELETE":
            try:
                customer = Customer.objects.get(id=pk)
                customer.delete()
                return JsonResponse({"message": "Customer deleted"})
            except Customer.DoesNotExist:
                response = JsonResponse({"message": "Customer does not exist."})
                response.status_code = 404
                return response
            except Exception as e:
                response = JsonResponse({"message": "Could not delete customer."})
                response.status_code = 400
                return response
    #DELETE a singe customer        

    #POST Create a customer or error message
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerListEncoder,
                safe=False
            )
        except:
            response = JsonResponse({"message":"Could not create a customer"})
            response.status_code = 400
            return response
    #POST Create a customer or error message



@require_http_methods(["GET", "POST", "DELETE"])
def api_salesperson_list(request, pk=None):
    #GET list of all the sales people or error message
    if request.method == "GET":
        try: 
            salespeople = Salesperson.objects.all()
            return JsonResponse(
                {"salespeople":salespeople},
                encoder=SalespersonListEncoder
            )
        except:
            response = JsonResponse({"message": "Error retreiving list of sales persons"})
            response.status_code = 400
            return response
    #GET list of all the sales people or error message


    #DELETE a single salesperson
    elif request.method == "DELETE":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse({"message": "Salesperson deleted"})
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Salesperson not found."})
            response.status_code = 404
            return response
        except Exception as e:
            response = JsonResponse({"message": "Could not deletesalesperson."})
            response.status_code = 400
            return response
    #DELETE a single salesperson


    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonListEncoder,
                safe=False
            )
        except:
            response = JsonResponse({"message":"Could not create a Salesperson"})
            response.status_code = 400
            return response
    


@require_http_methods(["GET", "POST", "DELETE"])
def api_sale_list(request, pk=None):

    # GET method for getting list of sales or individual sale
    if request.method == "GET":
        try:
            if pk == None:
                sales = Sale.objects.all()
            else:
                sales = Sale.objects.filter(id=pk)
            return JsonResponse(
                {"sales": sales},
                encoder=SaleListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"message": "Error retreiving list of sales"})
            response.status_code = 400
            return response
       


    # GET method for getting list of sales or individual sale

    # DELETE a single sale
    elif request.method == "DELETE":
            try:
                sale = Sale.objects.get(id=pk)
                sale.delete()
                return JsonResponse({"message": "Sale deleted"})
            except Sale.DoesNotExist:
                response = JsonResponse({"message": "Sale doesnt exist"})
                response.status_code = 404
                return response
            except Exception as e:
                response = JsonResponse({"message": "Could not delete this sale"})
                response.status_code = 400
                return response
    # DELETE a single sale

    # POST Method to create a sale
    else:
        content = json.loads(request.body)
        
        try:
        
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            automobile.sold = True
            automobile.save()

            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            response = JsonResponse({"message": "invalid vin"})
            response.status_code = 400


        try:
            salesperson = Salesperson.objects.get(employee_id=content["salesperson"])
            content["salesperson"] = salesperson
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "invalid salesperson"})
            response.status_code = 400
        
        try:
            customer = Customer.objects.get(id=content["customer"])
            content["customer"] = customer
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "invalid customer"})
            response.status_code = 400
            return response

        try:
        
            sale = Sale.objects.create(**content)

            return JsonResponse(
                sale,
                encoder=SaleListEncoder,
                safe=False,
            )
        except:
            response = JsonResponse({"Message": "Unable to create the sale"})
            response.status_code = 400
            return response