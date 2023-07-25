# CarCar

Team:

* Harold Sy - Services microservice
    React Components:
        Show a list of manufacturers
        Create a manufacturer
        Show a list of vehicle models
        
* Person 2 - Sales microservice
    React Components:
        Create a vehicle model
        Show a list of automobiles in inventory
        Create an automobile in inventory


## Design

## Service microservice

MODEL EXPLANATION:
AutomobileVo model: #===============================
    
    # list of model attributes:
    attributes = [
        vin =    [
                   for_service_appointments_setting,
                   for_service_appointments_canceling,
                   for_vip_identification,            
                 ]
        
        sold =   [
                   for_inventory_updating,
                   for_vip_identification,
                 ]
                 ]

Appointment model: #===============================

    # list of model attributes:
    attributes = [
        vip,
        date_time,
        reason,
        status,
        vin,
        customer,
        technician,
    ]



Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
