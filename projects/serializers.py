from rest_framework import serializers
from projects.models import message



class messageSerializer(serializers.ModelSerializer):
    class Meta:
        model=message
        fields=['name','email', 'message']
  
    
    
    