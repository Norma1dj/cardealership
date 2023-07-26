from django.db import models


class Technician(models.Model):
    first_name=models.CharField(max_length=50)
    last_name=models.CharField(max_length=50)
    employee_id=models.CharField(max_length=50)
    
    def __str__(self):
        return self.first_name




class AutomobileVO(models.Model):
    vin=models.CharField(max_length=50)
    sold=models.DateTimeField()

    def __str__(self):
        return self.vin



class Appointment(models.Model):
    vip=models.CharField(max_length=3)
    date_time=models.DateTimeField()
    reason=models.TextField()
    status=models.TextField()
    vin=models.CharField(max_length=50)
    customer=models.CharField(max_length=200)
    technician=models.ForeignKey(
        Technician,
        related_name="appointment",
        on_delete=models.CASCADE,
    )

    #def __str__(self):
    #    return self.name

