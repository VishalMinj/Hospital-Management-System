from django.urls import path, include
# from .views import AppointmentRequestView


from rest_framework.routers import DefaultRouter
from .views import AppointmentRequestViewSet

router = DefaultRouter()
router.register(r"appointments", AppointmentRequestViewSet)
urlpatterns = [
    # path("appointments/", AppointmentRequestView.as_view(), name="appointments-view"),
]
urlpatterns += router.urls
