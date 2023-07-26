from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from .models import Technician, AutomobileVO, Appointment
from common.json import ModelEncoder
from django.http import JsonResponse
import json


class TechnicianEncoder(ModelEncoder):
    model=Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentEncoder(ModelEncoder):
    model=Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    ]

class AutomobileVOEncoder(ModelEncoder):
    model=AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


# ================================================================================================

@require_http_methods(["GET","POST","DELETE"])
def list_technicians(request):
    # GET ====================================
    if request.method =="GET":
        techs=Technician.objects.all()
        return JsonResponse(
            {"techs":techs},
            encoder=TechnicianEncoder,
        )
    # POST ===================================
    elif request.method =="POST":
        print("I AM HERE!!!") 
        try:
            content=json.loads(request.body)
            tech=Technician.objects.create(**content)
            return JsonResponse(
                tech,
                encoder = TechnicianEncoder,
                safe=False
            )
        except:
            response=JsonResponse({"message":"could not create technician"})
            response.status_code=400
            return response
    # DELETE ==================================
    elif request.method =="DELETE":
        count,_=Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted":count>0})


# ================================================================================================

@require_http_methods(["GET", "POST", "DELETE", "PUT"])
def list_appointments(request):
    # GET =============================================
    if request.method =="GET":
        app=Appointment.objects.all()
        return JsonResponse(
            {"app":app},
            encoder=AppointmentEncoder,
        )
    # POST ============================================
    elif request.method =="POST":
        try:
            content=json.loads(request.body)

            vin=AutomobileVO.objects.get(import_href=content["vin"])
            content["vin"]=vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"messge": "Invalid vin number error 400"}
            )
        app=Appointment.objects.create(**content)
        return JsonResponse(
            vin,
            encoder=AppointmentEncoder,
            safe=False
        )
    # DELETE ===========================================
    elif request.method =="DELETE":
        count,_=Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted":count>0})
    # PUT ==============================================
    elif request.method =="PUT":
        try:
            if "vin" in content:
                vin=Appointment.objects.get(import_href=content["vin"])
                content["vin"]=vin
        except Appointment.DoesNotExist:
            return JsonResponse({"message:":"Invalid vin number error 400"})
        Appointment.objects.filter(id=id.update(**content))
        return JsonResponse(
            vin,
            encoder=AppointmentEncoder,
            safe=False,
        )        


# ================================================================================================

@require_http_methods(["GET"])
def list_automobiles(request):
    if request.method=="GET":
        car=AutomobileVO.objects.all()
        return JsonResponse(
            {"car":car},
            encoder=AutomobileVOEncoder,
        )
  