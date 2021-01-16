from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from projects.serializers import messageSerializer
from django.http import JsonResponse
from rest_framework import generics
from .models import message
from django.views import View
import io
from rest_framework.parsers import JSONParser
















def Band(request):
    return render(request, 'Band.html')


def Crowd(request):
    return render(request,'Crowd.html')


def BlackJack(request):
    return render(request,'Blackjack.html')



 
@csrf_exempt
def message(request):
    if request.method == 'POST':
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        serializer = messageSerializer(data=data)
        serializer.is_valid()
        serializer.save()
        return HttpResponse('Message sent!')


        
  





   

    


   
   

   



       