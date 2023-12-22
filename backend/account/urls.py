from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from account.views import SignUpView, LoginView

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('signup/', SignUpView.as_view(), name='signup'),
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh')
]
