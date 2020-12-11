from .models import message
from django.contrib import admin





@admin.register(message)

class InfoAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'email', 'message']