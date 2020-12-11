from django.db import models




class message(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=200)
    message=models.CharField(max_length=500)


