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
        "id"                                  # added id for django primary key
    ]


class AppointmentEncoder(ModelEncoder):
    model=Appointment
    properties = [
        "vip"
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
        "id"                                  # added id for django primary key
    ]

class AutomobileVOEncoder(ModelEncoder):
    model=AutomobileVO
    properties = [
        "vin",
        "sold",
        "id"                                  # added id for django primary key
    ]


# ================================================================================================

@require_http_methods(["GET","POST","DELETE"])
def list_technicians(request, pk=None):
    # GET ====================================
    #     Note: Code to get and list all of the
    #           technicians.
    if request.method == "GET":
        try:
            techs=Technician.objects.all()
            return JsonResponse(
                {"techs":techs},
                encoder=TechnicianEncoder,
            )
        except:
            response=JsonResponse({"message":"Could not connect to the server"})
            response.status_code=404
            return response
    # POST ===================================
    #      Note: Code to add a new technician.
    elif request.method == "POST":
        try:
            content=json.loads(request.body)
            tech=Technician.objects.create(**content)
            return JsonResponse(
                tech,
                encoder = TechnicianEncoder,
                safe=False
            )
        except:
            response=JsonResponse({"message":"Could not create technician"})
            response.status_code=400
            return response
    # DELETE ==================================
    #        Note: Code to remove a technician.
    elif request.method == "DELETE":
        try:
            tech=Technician.objects.get(id=pk)
            tech.delete()
            return JsonResponse({"message":"Techician deleted"})
        except tech.DoesNotExist:
            response=JsonResponse({"message": "Technician does not exist"})
            response.status_code=404
            return response
        except Exception as e:
            response=JsonResponse({"message":"Could not delete this technician"})
            response.status_code=400
            return response


# ================================================================================================

@require_http_methods(["GET", "POST", "DELETE", "PUT"])
def list_appointments(request, pk=None):
    # GET =============================================
    #     Note: Code to get and display a list of all
    #           appointments
    if request.method == "GET":
        try:
            appoint=Appointment.objects.all()
            return JsonResponse(
                {"appoint":appoint},
                encoder=AppointmentEncoder,
            )
        except:
            reponse=JsonResponse({"message": "Could not connect to the server"})
            reponse.status_code=404
            return reponse
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
            response=JsonResponse({"message":"Could not create appointment"})
            response.status_code=400
            return response
    # DELETE ===========================================
    #        Note: Code to delete an existing appointment.
    elif request.method == "DELETE":
        try:
            appoint=Appointment.objects.get(id=pk)
            appoint.delete()
            return JsonResponse({"message":"Appointment has been deleted"})
        except appoint.DoesNotExist:
            response=JsonResponse({"message":"Appointment does not exist"})
        except Exception as e:
            response=JsonResponse({"message":"Could not delete this appointment"})
            reponse.status_code=400
            return response
    # PUT ==============================================
    #     Note: Code to modify an existing appointment.
    elif request.method == "PUT":
        try:
            if pk==None:
                appoint=Appointment.objects.all()
            else:
                appoint=Appointment.objects.filter(id=pk)
            Appointment.objects.filter(id=id.update(**content))
            return JsonResponse(
                {"appoint":appoint},
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            reponse=JsonResponse({"message":"Appointment not found"})
            reponse.status_code=400
            return reponse
        


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

  