from django.urls import path, include
from .views import (
    MyLoginView,
    MyLogoutView,
    MyRegisterView,
    GoogleLoginView,
)

urlpatterns = [
    path("login/", MyLoginView.as_view(), name="login-view"),
    path("google-login/", GoogleLoginView.as_view(), name="google-login-view"),
    path("logout/", MyLogoutView.as_view(), name="logout-view"),
    path("registration/", MyRegisterView.as_view(), name="registration-view"),
]
