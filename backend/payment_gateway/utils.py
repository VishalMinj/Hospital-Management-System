from . import client
from rest_framework.serializers import ValidationError
from rest_framework import status
from threading import Thread
from datetime import datetime
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.conf import settings


def execute_in_background(function):
    def start_thread(*args, **kwargs):
        thread = Thread(target=function, args=args, kwargs=kwargs)
        thread.start()

    return start_thread


class RazorpayClient:

    def create_order(self, amount=450, currency="INR"):
        data = {
            "amount": amount*100,
            "currency": currency,
        }
        try:
            order_data = client.order.create(data=data)
            return order_data
        except Exception as e:
            print(e)
            return ValidationError(
                {
                    "status": status.HTTP_400_BAD_REQUEST,
                    "message": e,
                }
            )
    def verify_payment(self,order_id,payment_id,signature):
        try:
            return client.utility.verify_payment_signature({
                "razorpay_order_id":order_id,
                "razorpay_payment_id":payment_id,
                "razorpay_signature":signature,
            })
        except Exception as e:       
            return ValidationError(
                {
                    "status": status.HTTP_400_BAD_REQUEST,
                    "message": e,
                }
            )


@execute_in_background
def mail(context,receiver_email):
    
    template_name = "payment_gateway/email/email.html"
    convert_to_html_content =  render_to_string(
        template_name=template_name,
        context=context
    )
    plain_message = strip_tags(convert_to_html_content)
    send_mail(
        subject="Receiver information from a form",
        message=plain_message,
        from_email=settings.EMAIL_HOST_USER,
        recipient_list=[receiver_email],
        html_message=convert_to_html_content,
        # fail_silently=True
    )
