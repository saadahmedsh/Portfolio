
from django.urls import path, include
from . import views
from .views import message







urlpatterns = [
    
    path('band', views.Band , name='band'),
    path('crowd', views.Crowd , name='Crowd'),
    path('blackjack', views.BlackJack , name='blackjack'),
    path('contact/', message),
    
    
   

   
] 


