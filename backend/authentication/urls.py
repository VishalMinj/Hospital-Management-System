from django.urls import path
from .views import (
    MyLoginView,
    MyLogoutView,
    MyRegisterView,
    GoogleLoginView,
)
from rest_framework_simplejwt.views import (
    TokenVerifyView, 
    TokenRefreshView,
)

urlpatterns = [
    path("login/", MyLoginView.as_view(), name="login-view"),
    path("google-login/", GoogleLoginView.as_view(), name="google-login-view"),
    path("google-login/callback/", GoogleLoginView.as_view(), name="google-login-view"),
    path("logout/", MyLogoutView.as_view(), name="logout-view"),
    path("registration/", MyRegisterView.as_view(), name="registration-view"),
    path("token/verify/", TokenVerifyView.as_view(), name="tokev-verification-view"),
    path("token/refresh/", TokenRefreshView().as_view(), name="token-refersh-view"),
]
