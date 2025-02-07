from rest_framework import serializers
from .models import Transaction


class AppointmentPaymentSerializer(serializers.Serializer):
    amount=serializers.IntegerField()
    currency=serializers.CharField()


class TransactionModelSerializers(serializers.ModelSerializer):
    class Meta:
        model=Transaction
        exclude=["id","datetime"]

        
class ListTransactionModelSerializers(serializers.ModelSerializer):

    time=serializers.SerializerMethodField(source="time")
    class Meta:
        model=Transaction
        fields = ["payment_id", "amount","time","id"]

    def get_time(self,obj):
        return obj.time
