from django.urls import path
from .views import (
    AppointmentPaymentView,
    TransactionModelViewSet,
    TransactionCompleteView,
)
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r"transactions", TransactionModelViewSet)

urlpatterns = [
    path(
        "transactions/create/", AppointmentPaymentView.as_view(), name="create-payment"
    ),
    path(
        "transactions/complete/",
        TransactionCompleteView.as_view(),
        name="complete-payment",
    ),
]
urlpatterns += router.urls
