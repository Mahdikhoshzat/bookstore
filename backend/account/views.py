from rest_framework.views import APIView
from rest_framework.request import HttpRequest
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import JSONParser
from rest_framework_simplejwt.tokens import RefreshToken
from backend.account.models import User
from backend.account.serializers import SignUpSerializer, LoginSerializer
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi


# Create your views here.
class SignUpView(APIView):
    @swagger_auto_schema(
        query_serializer=SignUpSerializer(),
        responses={
            status.HTTP_200_OK: openapi.Response(schema=SignUpSerializer(many=True), description=''),
            status.HTTP_400_BAD_REQUEST: 'Bad Request',
            status.HTTP_404_NOT_FOUND: 'Not Found',
        },
        operation_id='singup',
        operation_summary='Sign up'
    )
    def post(self, request: HttpRequest):
        data = JSONParser().parse(request)
        serializer = SignUpSerializer(data=data)

        if not serializer.is_valid():
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response(data={'message': 'عملیات با موفقیت انجام شد.'}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    @swagger_auto_schema(
        query_serializer=LoginSerializer(),
        responses={
            status.HTTP_200_OK: openapi.Response(schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'refresh': openapi.Schema(type=openapi.TYPE_STRING, description=''),
                    'access': openapi.Schema(type=openapi.TYPE_STRING, description=''),
                }
            ), description=''),
            status.HTTP_400_BAD_REQUEST: 'Bad Request',
            status.HTTP_404_NOT_FOUND: 'Not Found',
        },
        operation_id='login',
        operation_summary='Login'
    )
    def post(self, request):
        data = JSONParser().parse(request)
        username = data.get('username')
        password = data.get('password')

        if user := User.objects.filter(username=username).first():
            if user.check_password(password):
                refresh = RefreshToken.for_user(user)

                return Response(data={'refresh': str(refresh), 'access': str(refresh.access_token)})

        return Response(data={'message': 'نام کاربری یا کلمه عبور اشتباه است.'}, status=status.HTTP_400_BAD_REQUEST)
