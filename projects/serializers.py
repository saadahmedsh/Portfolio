from rest_framework import serializers
from projects.models import message



class messageSerializer(serializers.Serializer):
    name=serializers.CharField(max_length=100)
    email=serializers.EmailField(max_length=200)
    message=serializers.CharField(max_length=500)
    
    
    def create(self, validated_data):
      
        return message.objects.create(**validated_data)

