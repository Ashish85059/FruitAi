from rest_framework import generics
from .models import FAQ
from .serializers import FAQSerializer

# List all FAQs or create a new FAQ
class FAQListCreateView(generics.ListCreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer

# Retrieve, update, or delete a specific FAQ
class FAQDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
