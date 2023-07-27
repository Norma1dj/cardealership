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
    #    "id"                                  # added id for django primary key
    ]


class AppointmentEncoder(ModelEncoder):
    model=Appointment
    properties = [
        "vip",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "id"                                  # added id for django primary key
    ]

    def get_extra_data(self, o):
     return {
         "technician": {
             "first_name": o.technician.first_name,
             "last_name": o.technician.last_name,
             "employee_id": o.technician.employee_id,
             "id": o.technician.id,
         },
     }


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
            appointment=Appointment.objects.all()
            return JsonResponse(
                {"appointment":appointment},
                encoder=AppointmentEncoder,
                safe=False,
            )
        except:
           response=JsonResponse({"message": "Could not connect to the server"})
           response.status_code=404
           return response
    # POST ============================================
    #      Note: Code to create a new appointment
    elif request.method == "POST":
        try:
            content=json.loads(request.body)
            appointment=Appointment.objects.create(**content)
            return JsonResponse(
                appointment,
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
            appointment=Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse({"message":"Appointment has been deleted"})
        except Appointment.DoesNotExist:
            response=JsonResponse({"message":"Appointment does not exist"})
        except Exception as e:
            response=JsonResponse({"message":"Could not delete this appointment"})
            response.status_code=400
            return response
    # PUT ==============================================
    #     Note: Code to modify an existing appointment.
    elif request.method == "PUT":
        try:
<<<<<<< HEAD
            if pk==None:
                appointment=Appointment.objects.all()
            else:
                appointment=Appointment.objects.filter(id=pk)
            Appointment.objects.filter(id=id.update(**content))
            return JsonResponse(
                {"appointment":appointment},
=======
            content=json.loads(request.body)
            appoint=Appointment.objects.get(id=pk)
            properties=["canceled", "finished", "created"]
            for properties in 
            auto.save()
            return JsonResponse(
                appoint,
>>>>>>> hals
                encoder=AppointmentEncoder,
                safe=False,
            )
        except appoint.DoesNotExist:
            response=JsonResponse({"message":"Appoinment does not exist"})
            response.status_code=404
            return response
        

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

  