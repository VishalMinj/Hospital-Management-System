from rest_framework import viewsets
from rest_framework.mixins import (
    RetrieveModelMixin,
    DestroyModelMixin,
    UpdateModelMixin
)
from .models import AppointmentRequest
from .serializers import MakeAppointmentSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.response import Response
from .serializers import GetAppointmentSerializer
from rest_framework import status


class AppointmentRequestViewSet(
    viewsets.GenericViewSet,
    RetrieveModelMixin,
    DestroyModelMixin,
    UpdateModelMixin,
):
    serializer_class = MakeAppointmentSerializer
    queryset = AppointmentRequest.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        qs = self.get_queryset()
        queryset=qs.filter(belong_to=request.user)
        serializer = GetAppointmentSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save(belong_to=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)