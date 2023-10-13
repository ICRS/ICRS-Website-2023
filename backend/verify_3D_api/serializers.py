from rest_framework import serializers
from .models import ID
class IDSerializer(serializers.ModelSerializer):
    class Meta:
        model = ID
        fields = ['pk', 'RFIDcode', 'name', 'shortCode', 'member', 'inducted']