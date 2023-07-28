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
    - Salesperson
    - AutomobileVO

* The Sales model uses data from the other 3 models to update a sales record.

* The automobileVO is used by the sales poller to get updated information from the Inventory Microservice every second. This allows the sales model to get up-to-date automobile inventory vin and sold information.

* Sales URLs
    - List Customer http://localhost:3000/customers/
    - Add Customer http://localhost:3000/customers/create/
    - List Salepeople http://localhost:3000/salespeople/
    - Add Salesperson http://localhost:3000/salespeople/create/
    - List Sales http://localhost:3000/sales/
    - Record Sale http://localhost:3000/sales/create/
    - Sales by Salesperson http://localhost:3000/sales/history/

## Services microservice

* This service uses 3 models:
    - Technician
    - Appointment
    - AutomobileVO

* The Appointment model uses data from the other 2 models to update a sales record.

* The automobileVO is used by the services poller to get updated information from the Inventory Microservice every  60 seconds. This allows the Appointment model to get up-to-date automobile inventory vin and sold information.

* Services URLs
    - List Technicians http://localhost:3000//technicians/
    - Add Technician http://localhost:3000//technicians/create/
    - List Appointments http://localhost:3000/appointments/
    - Add Appointment http://localhost:3000/appointments/create/
    

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
        


POST    http://localhost:8090/api/customers/


            JSON Body Sent
        {
            "first_name": "JohnnyJohn",
            "last_name": "DoeDoeDoe",
            "address": "123123123 Main St",
            "phone_number": "555-123-2222"
        }

             JSON Body Returned
        {
            "first_name": "JohnnyJohn",
            "last_name": "DoeDoeDoe",
            "address": "123123123 Main St",
            "phone_number": "555-123-2222",
            "id": 4
        }
            
#### Salespeople API

DELETE  http://localhost:8090/api/salespeople/:id/

GET     http://localhost:8090/api/salespeople/


            JSON Body Returned
        {
        "salespeople": [
            {
                "first_name": "JaneJane",
                "last_name": "Smith",
                "employee_id": "2",
                "id": 2
            },]
        }
        

POST    http://localhost:8090/api/salespeople/


             JSON Body Sent
        {
            "first_name": "John",
            "last_name": "Rabbit",
            "employee_id": "3"
        }

            JSON Body Returned
        {
            "first_name": "John",
            "last_name": "Rabbit",
            "employee_id": "3",
            "id": 17
        }
        

#### Sale API

DELETE  http://localhost:8090/api/sales/:id/

GET     http://localhost:8090/api/sales/


                 JSON Body Returned
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
        

POST    http://localhost:8090/api/sales/


            JSON Body Sent
        {
            "price": 10500,
            "customer": 4, 
            "automobile": "1C3CC5FB2AN120174",
            "salesperson": "2"
        }

             JSON Body Returned
        {
            "price": "19999.99",
            "id": 5,
            "customer": {
                "first_name": "Customer1",
                "last_name": "lastname1",
                "address": "1233",
                "phone_number": "1111111",
                "id": 1
            },
            "automobile": {
                "sold": true,
                "vin": "KL4CJASB0FBtest04"
            },
            "salesperson": {
                "first_name": "Terry",
                "last_name": "Gene",
                "employee_id": "2"
            }
        }

### Services API Information

There are a total of 8 apis for the Service Microservice

#### Technicians API

DELETE  http://localhost:8080/api/technicians/:id

GET     http://localhost:8080/api/technicians/


                JSON Body Returned
        {
            "techs": [
                {
                    "first_name": "Drew",
                    "last_name": "Norman-Meadows",
                    "employee_id": "dre3w",
                    "id": 1
                }
            ]
        }
        


POST    http://localhost:8080/api/technicians/


            JSON Body Sent
        {
            "first_name": "John",
            "last_name": "Doe",
            "employee_id": "12345"
        }

             JSON Body Returned
        {
            "first_name": "John",
            "last_name": "Doe",
            "employee_id": "12345",
            "id": 1
        }
            
#### Appointments API

DELETE  http://localhost:8080/api/appointments/:id

GET     http://localhost:8080/api/appointments/


                JSON Body Returned
        {
        "appointment": [
            {
                "vip": "Yes",
                "date_time": "2023-07-27T15:30:00+00:00",
                "reason": "Regular checkup",
                "status": "Scheduled",
                "vin": "ABC123",
                "customer": "Jodhn Dode",
                "id": 3,
                "technician": {
                    "id": 1
                } 
            }]

            },
        


POST    http://localhost:8080/api/appointments/


            JSON Body Sent
        {
            "vip": "Yes",
            "date_time": "2023-07-27 15:30",
            "reason": "Regular checkup",
            "status": "Scheduled",
            "vin": "ABC123",
            "customer": "Jodhn Dode",
            "technician_id": 1
        }

             JSON Body Returned
        {
            "vip": "Yes",
            "date_time": "2023-07-27 15:30",
            "reason": "Regular checkup",
            "status": "Scheduled",
            "vin": "ABC123",
            "customer": "Jodhn Dode",
            "id": 6,
            "technician": {
                "id": 1
            }
        }
            
PUT "canceled"    http://localhost:8080/api/appointments/:id/cancel

            
            JSON Body Sent
        {
            "status": "canceled"
        }

            JSON Body Returned
        {
            "vip": "Yes",
            "date_time": "2023-07-27T15:30:00+00:00",
            "reason": "Regular checkup",
            "status": "canceled",
            "vin": "ABC123",
            "customer": "Jodhn Dode",
            "id": 2,
            "technician": {
                "id": 1
            }
        }    





PUT "canceled"    http://localhost:8080/api/appointments/:id/finish


            JSON Body Sent
        {
            "status": "finished"
        }

            JSON Body Returned
        {
            "vip": "Yes",
            "date_time": "2023-07-27T15:30:00+00:00",
            "reason": "Regular checkup",
            "status": "finished",
            "vin": "ABC123",
            "customer": "Jodhn Dode",
            "id": 3,
            "technician": {
                "id": 1
            }
        }