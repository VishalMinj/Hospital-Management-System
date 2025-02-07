from rest_framework.serializers import ModelSerializer,Serializer
from .models import AppointmentRequest


class MakeAppointmentSerializer(ModelSerializer):
    class Meta:
        model = AppointmentRequest
        exclude = ["verification_status"]


class GetAppointmentSerializer(ModelSerializer):

    class Meta:
        model=AppointmentRequest
        fields = ["id", "patient_name", "payment_status", "verification_status"]
