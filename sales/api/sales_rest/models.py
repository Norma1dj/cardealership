from django.db import models

# Create your models here.

class AutomobileVO(models.Model):
    sold = models.BooleanField(default=False)
    vin = models.CharField(max_length=100)
    
    def __str__(self):
        return self.vin


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField()
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
    
class Sale(models.Model):
   
    price = models.DecimalField(max_digits=10, decimal_places=2)

    customer = models.ForeignKey(
        Customer,
        related_name="sales",
        on_delete=models.CASCADE)

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name= 'sales',
        on_delete=models.CASCADE)
    
    salesperson = models.ForeignKey(
        Salesperson,
        related_name='sales',
        on_delete=models.CASCADE
        )



