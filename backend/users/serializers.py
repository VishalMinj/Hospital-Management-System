from rest_framework.serializers import ModelSerializer,SerializerMethodField
from .models import CustomUser


class UserDetailsSerializer(ModelSerializer):
    full_name = SerializerMethodField(source="full_name")
    class Meta:
        model=CustomUser
        fields = ["id", "username", "role", "full_name"]

    def get_full_name(self,obj):
        return obj.full_name
