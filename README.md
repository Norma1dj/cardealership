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
    





## Sales microservice

Explain your models and integration with the inventory
microservice, here.
