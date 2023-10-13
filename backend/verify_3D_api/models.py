from django.db import models

class ID(models.Model):
    name = models.CharField(max_length=40)
    RFIDcode = models.CharField(max_length=200)
    shortCode = models.CharField(max_length=10)
    member = models.BooleanField(default=False)
    inducted = models.BooleanField(default=False)
    
    def __str__(self):
        return self.RFIDcode + ' ' + self.name