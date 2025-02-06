from .utils import RazorpayClient
from rest_framework import status
from rest_framework.response import Response
from rest_framework import views, generics
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import viewsets
from .serializers import AppointmentPaymentSerializer, TransactionModelSerializers
from .utils import RazorpayClient, mail
from .models import Transaction


class AppointmentPaymentView(views.APIView):
    serializer_class = AppointmentPaymentSerializer
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    payment_client = RazorpayClient()

    def post(self, request):
        response = self.serializer_class(data=request.data)
        if response.is_valid():
            payment_response = self.payment_client.create_order(
                amount=response.validated_data.get("amount"),
                currency=response.validated_data.get("currency"),
            )
            return Response(
                payment_response,
                status=status.HTTP_201_CREATED,
            )
        else:
            Response(
                data={
                    "status": status.HTTP_400_BAD_REQUEST,
                    "message": "Bad request:",
                    "error": str(response.errors),
                },
                status=status.HTTP_400_BAD_REQUEST,
            )


class TransactionModelViewSet(
    viewsets.GenericViewSet,
    generics.ListAPIView,
    generics.DestroyAPIView,
    generics.RetrieveAPIView,
):
    serializer_class = TransactionModelSerializers
    queryset = Transaction.objects.all()
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]


class TransactionCompleteView(views.APIView):
    serializer_class = TransactionModelSerializers
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    payment_client = RazorpayClient()

    def post(self, request):
        data = self.serializer_class(data=request.data)
        if data.is_valid():
            self.payment_client.verify_payment(
                order_id=data.validated_data.get("order_id"),
                payment_id=data.validated_data.get("payment_id"),
                signature=data.validated_data.get("signature"),
            )
            transection = data.save(belong_to=request.user)
            mail(
                {
                    "name": transection.name,
                    "payment_id": transection.payment_id,
                    "order_id": transection.order_id,
                    "signature": transection.signature,
                    "amount": transection.amount,
                    "time": transection.time,
                },
                transection.belong_to.email,
            )

            return Response(
                {
                    "status": status.HTTP_201_CREATED,
                    "message": "Transection successfully recorded",
                },
                status=status.HTTP_201_CREATED,
            )
        else:

            return Response(
                {
                    "status": status.HTTP_400_BAD_REQUEST,
                    "message": "Bad request",
                    "error": str(data.errors),
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
