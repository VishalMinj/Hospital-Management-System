from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client
from dj_rest_auth.registration.views import SocialLoginView
from dj_rest_auth.views import (
    LoginView,
    LogoutView,
)
from dj_rest_auth.registration.views import RegisterView
from core import settings


class MyLoginView(LoginView):

    def get_response(self):
        response = super().get_response()
        if "user" in response.data:
            response.data.pop("user")

        return response


class MyLogoutView(LogoutView):
    pass


class MyRegisterView(RegisterView):
    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        response.data = {}
        return response


class GoogleLoginView(SocialLoginView):  # if you want to use Authorization Code Grant, use this
    adapter_class = GoogleOAuth2Adapter
    callback_url = settings.GOOGLE_CALLBACK_URL
    client_class = OAuth2Client
