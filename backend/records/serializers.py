from rest_framework.serializers import ModelSerializer
from .models import AppointmentRequest


class MakeAppointmentSerializer(ModelSerializer):
    class Meta:
        model = AppointmentRequest
        exclude = ["verification_status"]

