from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from dj_rest_auth.views import (
    LoginView,
    LogoutView,
)
from .serializers import CustomRegisterSerializer
from dj_rest_auth.registration.views import RegisterView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
import requests


class MyLoginView(LoginView):

    def get_response(self):
        response = super().get_response()
        if "user" in response.data:
            response.data.pop("user")

        return response


class MyLogoutView(LogoutView):
    pass


class MyRegisterView(RegisterView):
    serializer_class=CustomRegisterSerializer
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.data = {}
        return response

class GoogleLoginView(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    callback_url = "postmessage"
    client_class = OAuth2Client


class GoogleLoginCallback(APIView):
    def post(self, request, *args, **kwargs):

        code = request.GET.get("code")

        if code is None:
            return Response(status=status.HTTP_400_BAD_REQUEST)

        token_endpoint_url = "http://localhost:8000/auth/google-login/"
        response = requests.post(url=token_endpoint_url, data={"code": code})
        if response.status_code==status.HTTP_200_OK:
            return Response(response.json(), status=status.HTTP_200_OK)
        return Response({"Error":"Bad request exchange token with gooogle"},status=status.HTTP_400_BAD_REQUEST)
