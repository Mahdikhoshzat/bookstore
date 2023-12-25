from django.urls import path

from publisher.views import PublisherSignUpView, PublisherLoginView

urlpatterns = [
    path('signup/', PublisherSignUpView.as_view(), name='publisher-sign-up'),
    path('login/', PublisherLoginView.as_view(), name='publisher-login')
]
