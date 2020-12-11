
from django.urls import path, include
from . import views



urlpatterns = [
    
    path('band', views.Band , name='band'),
    path('crowd', views.Crowd , name='Crowd'),
    path('contact/', views.contact, name='contact' ),
    path('blackjack', views.BlackJack , name='blackjack'),
]
