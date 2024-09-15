from django.urls import path
from . import views

urlpatterns = [
    path('faqs/', views.FAQListCreateView.as_view(), name='faq-list-create'),
    path('faqs/<int:pk>/', views.FAQDetailView.as_view(), name='faq-detail'),
]
