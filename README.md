# CarCar

    This application is used for a car dealership to manage inventory, sales, and maintenance services for automobiles.


Team:

* Harold Sy -Services 
    React Components:
        Show a list of manufacturers
        Create a manufacturer
        Show a list of vehicle models
        
* Drew Norman-Meadows -Sales 
    React Components:
        Create a vehicle model
        Show a list of automobiles in inventory
        Create an automobile in inventory

## Getting Started

    Requirements:
        -Docker
        -Git
        -Node.js
        -Insomnia(optional)

    Steps:
        -Fork the repository
        -Clone to your local computer:
            -git clone << url >>
        -Start up the project using Docker
            -docker volume create beta-data
            -docker compose build
            -docker compose up
        -Verify in the Docker app all containers  are running without errors
        -Access the frontend at http://localhost:30000/



## Design

    CarCar integrates 3 microservices:
        -Sales
        -Services
        -Inventory

    Our sales and services microservices use pollers to retrieve the most up-to-date data from the inventory microservice. Sales polls every second while services polls every 60 seconds.

*** CARCAR DIAGRAM PLACEHOLDER**
*** CARCAR DIAGRAM PLACEHOLDER**
*** CARCAR DIAGRAM PLACEHOLDER**







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
