from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from projects.serializers import messageSerializer
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
import io
from django.http import JsonResponse











def Band(request):
    return render(request, 'Band.html')


def Crowd(request):
    return render(request,'Crowd.html')


def BlackJack(request):
    return render(request,'Blackjack.html')



@csrf_exempt
def contact(request):
    if request.method == 'POST':
        stream = io.BytesIO(request.body)
        data = JSONParser().parse(stream)
        serializer = messageSerializer(data=data)
        serializer.is_valid()
        serializer.save()
        return HttpResponse('Message sent!')


       