from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from dj_rest_auth.registration.serializers import RegisterSerializer
from rest_framework import serializers

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["username"] = user.username
        token["email"] = user.email
        token["first_name"] = user.first_name
        token["last_name"] = user.last_name
        token["role"] = user.role
        token["gender"] = user.gender

        return token

class CustomRegisterSerializer(RegisterSerializer):
    # pass
    first_name = serializers.CharField(max_length=30, write_only=True)
    last_name = serializers.CharField(max_length=30, write_only=True)

    def validate_first_name(self, value):
        return value

    def validate_last_name(self, value):
        return value
    def get_cleaned_data(self):
        data= super().get_cleaned_data()
        data['first_name']= self.validated_data.get('first_name', '')
        data['last_name']= self.validated_data.get('last_name', '')
        return data



