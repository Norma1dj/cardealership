from django.views.decorators.http import require_http_methods
from django.shortcuts import render
from .models import Technician, AutomobileVO, Appointment
from common.json import ModelEncoder
from django.http import JsonResponse
import json


class TechnicianEncoder(ModelEncoder):
    tech_model=Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
    ]


class AppointmentEncoder(ModelEncoder):
    app_model=Appointment
    properties = [
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    ]



@require_http_methods(["GET","POST","DELETE"])
def list_technicians(request):
    # GET ====================================
    if request=="GET":
        techs=Technician.objects.all()
        return JsonResponse(
            {"techs":techs},
            encoder=TechnicianEncoder,
        )
    # POST ===================================
    elif request=="POST":
        content=json.loads(request.body)
        try:
            employee_id=AutomobileVO.objects.get(import_href=content["employee_id"])
            content["employee_id"]=employee_id
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                employee_id,
                encoder=TechnicianEncoder,
                safe=False,
            )
    # DELETE ==================================
    elif request=="DELETE":
        count,_=Technician.objects.filter(id=id).delete()
        return JsonResponse({"deleted":count>0})

# ================================================================================================

@require_http_methods(["GET", "POST", "DELETE", "PUT"])
def list_appointments(request):
    # GET =============================================
    if request=="GET":
        app=Appointment.objects.all()
        return JsonResponse(
            {"app":app}
            encoder=AppointmentEncoder,
        )
    # POST ============================================
    elif request=="POST":
        content=json.loads(request.body)
        try:
            vin=AutomobileVO.objects.get(import_href=content["vin"])
            content["vin"]=vin
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"messge": "Invalid vin number"}
            )
        app=Appointment.objects.create(**content)
        return JsonResponse(
            vin,
            encoder=AppointmentEncoder,
            safe=False
        )
    # DELETE ===========================================
    elif request=="DELETE":
        count,_=Appointment.objects.filter(id=id).delete()
        return JsonResponse({"deleted":count>0})
    # PUT ==============================================
    elif request=="PUT":
        try:
            if "vin" in content:
                vin=Appointment.objects.get(import_href=content["vin"])
                content["vin"]=vin
        except Appointment.DoesNotExist:
            return JsonResponse({"message:":"Invalid vin number"})
        Appointment.objects.filter(id=id.update(**content))
        return JsonResponse(
            vin,
            encoder=AppointmentEncoder,
            safe=False,
        )        


