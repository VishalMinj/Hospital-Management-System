from django.db import models


class AppointmentRequest(models.Model):

    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
        ("O", "Other"),
    ]
    PAYMENT_CHOICES = [("O", "Online"), ("C", "Cash")]
    APPOINTMENT_CHOICES = [
        ("P", "PENDING"),
        ("R", "REJECTED"),
        ("V", "VERIFIED"),
    ]

    BLOOD_GROUPS = [
        ("A+", "A+"),
        ("A-", "A-"),
        ("B+", "B+"),
        ("B-", "B-"),
        ("AB+", "AB+"),
        ("AB-", "AB-"),
        ("O+", "O+"),
        ("O-", "O-"),
    ]
    patient_name = models.CharField(max_length=50, verbose_name="Patients Name")
    age = models.IntegerField(verbose_name="Age", null=False)
    phone_number = models.CharField(
        verbose_name="Phone Number", max_length=10, null=True, blank=True
    )
    gender = models.CharField(
        choices=GENDER_CHOICES,
        max_length=1,
        null=True,
        blank=True,
        verbose_name="Gender",
    )
    blood_group = models.CharField(
        verbose_name="Blood Group",
        choices=BLOOD_GROUPS,
        max_length=3,
        null=True,
        blank=True,
    )
    reason = models.TextField(verbose_name="Reason for Visit")
    prefered_visit_date = models.DateField(verbose_name="Prefered Visiting Date")
    past_medical_history = models.TextField(verbose_name="Any past medical History")

    payment_method = models.CharField(
        verbose_name="Payment Status",
        choices=PAYMENT_CHOICES,
        max_length=1,
        null=True,
        blank=True,
    )

    payment_status = models.BooleanField(verbose_name="Paymet Status")
    verification_status = models.CharField(
        verbose_name="Appointment Status", choices=APPOINTMENT_CHOICES, max_length=1,default="P"
    )
