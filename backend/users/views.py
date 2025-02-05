from django.shortcuts import render
from dj_rest_auth.views import UserDetailsView


class MyUserDetailsView(UserDetailsView):
    def get(self, request, *args, **kwargs):
        response= super().get(request, *args, **kwargs)
        response.data["role"]=request.user.role
        return response
