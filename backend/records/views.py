from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.mixins import (
    RetrieveModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    CreateModelMixin,
)
from .models import AppointmentRequest
from .serializers import MakeAppointmentSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class AppointmentRequestViewSet(
    viewsets.GenericViewSet,
    RetrieveModelMixin,
    DestroyModelMixin,
    ListModelMixin,
    CreateModelMixin,
):
    serializer_class = MakeAppointmentSerializer
    queryset = AppointmentRequest.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
