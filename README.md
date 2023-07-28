# CarCar

This application is used for a car dealership to manage inventory, sales, and maintenance services for automobiles.


Team:

* Harold Sy -Services 
    - React Components:
        - Show a list of manufacturers
        - Create a manufacturer
        - Show a list of vehicle models
        
* Drew Norman-Meadows -Sales 
    - React Components:
        - Create a vehicle model
        - Show a list of automobiles in inventory
        - Create an automobile in inventory

## Getting Started

* Requirements:
    - Docker
    - Git
    - Node.js
    - Insomnia(optional)

* Steps:
    - Fork the repository
    - Clone to your local computer:
        - git clone << url >>
    - Start up the project using Docker
        - docker volume create beta-data
        - docker compose build
        - docker compose up
    - Verify in the Docker app all containers  are running without errors
    - Access the frontend at http://localhost:3000/



## Design
   * worked on backend first to provide support for front end integration
       - created models
       - created urls
       - created views
       - registered views with admin to allow for use of admin panel
       - trouble shot issues with partner
       - integrated best source ideas
    * worked on frontend next, using backend to trouble shoot potential problems
       - created add a technician while creating a form
       - created list all technicians
       - created a create service appointment
       - created a list all service appointments
       - created a list service history for a certain car

* CarCar integrates 3 microservices:
    - Sales
    - Services
    - Inventory

Our sales and services microservices use pollers to retrieve the most
up-to-date data from the inventory microservice. Sales polls every
second while services polls every 60 seconds.



![Img](/images/project_beta_CarCar.png)


## Sales microservice

* This service uses 4 models:
    - Sales
    - Customer 
    - Salesperosn
    - AutomobileVO

* The Sales model uses data from the other 3 models to update a sales record.

* The automobileVO is used by the sales poller to get updated information from the Inventory Microservice every second. This allows the sales model to get up-to-date automobile inventory vin and sold information.


## API Documentation

### Urls and Ports

* Inventory Microservice
    http://localhost:8100

* Sales Microservice
    http://localhost:8090

* Service Microservice
    http://localhost:8090

* Polling
    http://project-beta-inventory-api-1:8000/api/automobiles/

        
### Sales API Information

There are a total of 9 apis for the Sales Microservice

#### Customer API

DELETE  http://localhost:8090/api/customers/:id/

GET     http://localhost:8090/api/customers/
JSON Body Returned

        ```
        {
        "customers": [
            {
                "first_name": "Johnny",
                "last_name": "DoeDoe",
                "address": "123123 Main St",
                "phone_number": "555-123-1111",
                "id": 3
            },]
        }
        ```


POST    http://localhost:8090/api/customers/
Required JSON Body (POST)

        ```    
        {
            "first_name": "JohnnyJohn",
            "last_name": "DoeDoeDoe",
            "address": "123123123 Main St",
            "phone_number": "555-123-2222"
        }
        ```
            
#### Salespeople API

DELETE  http://localhost:8090/api/salespeople/:id/

GET     http://localhost:8090/api/salespeople/
JSON Body Returned

        ```
        {
        "salespeople": [
            {
                "first_name": "JaneJane",
                "last_name": "Smith",
                "employee_id": "2",
                "id": 2
            },]
        }
        ```

POST    http://localhost:8090/api/salespeople/
Required JSON Body (POST)

        ```
        {
            "first_name": "John",
            "last_name": "Rabbit",
            "employee_id": "3"
        }
        ```

#### Sale API

DELETE  http://localhost:8090/api/sales/:id/
GET     http://localhost:8090/api/sales/
JSON Body Returned

        ```
        {
        "sales": [
            {
                "price": "222222.00",
                "id": 13,
                "customer": {
                    "first_name": "Johnny",
                    "last_name": "DoeDoe",
                    "address": "123123 Main St",
                    "phone_number": "555-123-1111",
                    "id": 3
                },
                "automobile": {
                    "sold": true,
                    "vin": "1C3CC5FB2AN120173"
                },
                "salesperson": {
                    "first_name": "JaneJane",
                    "last_name": "Smith",
                    "employee_id": "2"
                }
            }]
        }
        ```

POST    http://localhost:8090/api/sales/
Required JSON Body (POST)

        ```
        {
            "price": 10500,
            "customer": 4, 
            "automobile": "1C3CC5FB2AN120174",
            "salesperson": "2"
        }
        ```


## Service microservice
MODEL EXPLANATION AND MICROSERVICE INTEGRATION:
    AutomobileVo model: #===============================
         vin = [
                 for_service_appointment_setting,
                 for_service_appointment_canceling,
                 for_inventory_keeping,
                 for_vip_identification ]
         
         sold = [
                  for_inventory_updating,
                  for_vip_identification ]

    Appointment model: #===============================
         vip        = [ 
                        if_automobile_sold_from_inventory
                        give_special_treatment
                      ]

         date_time  = [
                        for_record_keeping
                      ]

         reason     = [
                        for_service_appointment
                      ]

         status     = [
                        state_of_service
                           [created, canceled, finished]
                      ]
        
         vin        = [
                        car_identification,
                        vip_identification
                      ]   
               
        customer    = [
                        car_ownership,
                        service_history
                      ]
        
        technician  = [
                        service_person,
                        service_identification
                      ] 
    




