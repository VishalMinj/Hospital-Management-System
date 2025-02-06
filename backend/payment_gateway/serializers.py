from rest_framework import serializers
from .models import Transaction


class AppointmentPaymentSerializer(serializers.Serializer):
    amount=serializers.IntegerField()
    currency=serializers.CharField()


class TransactionModelSerializers(serializers.ModelSerializer):
    class Meta:
        model=Transaction
        exclude=["id","datetime"]