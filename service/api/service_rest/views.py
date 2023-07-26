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
    #     Note: Code to get and list all of the
    #           technicians.
    if request.method == "GET":
        techs=Technician.objects.all()
        return JsonResponse(
            {"techs":techs},
            encoder=TechnicianEncoder,
        )
    # POST ===================================
    #      Note: Code to add a new technician.
    elif request.method == "POST":
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
    #        Note: Code to remove a technician.
    elif request.method == "DELETE":
        count,_=Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted":count>0})


# ================================================================================================

@require_http_methods(["GET", "POST", "DELETE", "PUT"])
def list_appointments(request):
    # GET =============================================
    #     Note: Code to get and display a list of all
    #           appointments
    if request.method == "GET":
        appoint=Appointment.objects.all()
        return JsonResponse(
            {"appoint":appoint},
            encoder=AppointmentEncoder,
        )
    # POST ============================================
    #      Note: Code to create a new appointment
    elif request.method == "POST":
        try:
            content=json.loads(request.body)
            appoint=Appointment.objects.create(**content)
            return JsonResponse(
                appoint,
                encoder = AppointmentEncoder,
                safe=False,
            )
        except:
            response=JsonResponse({"message":"could not create appoinment"})
            response.status_code=400
            return response
    # DELETE ===========================================
    #        Note: Code to delete an existing appointment.
    elif request.method == "DELETE":
        count,_=Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted":count>0})
    # PUT ==============================================
    #     Note: Code to modify an existing appointment.
    elif request.method == "PUT":
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
def list_automobiles(request, pk=None):
    # GET ==============================================
    #     Code: gets and lists all automobiles or a
    #           specific car 
    if request.method == "GET":
        if pk == None:
            car=AutomobileVO.objects.all()
        else:
            car=AutomobileVO.objects.filter(id=pk)
        return JsonResponse(
            {"car":car},
            encoder=AutomobileVOEncoder,
            safe=False,
        )

  