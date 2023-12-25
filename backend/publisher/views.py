from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken

from publisher.serializers import PublisherSignUpSerializer, PublisherLoginSerializer


# Create your views here.

class PublisherSignUpView(APIView):
    @swagger_auto_schema(
        request_body=PublisherSignUpSerializer,
        responses={
            status.HTTP_201_CREATED: 'عملیات با موفقیت انجام شد.',
            status.HTTP_400_BAD_REQUEST: 'Bad Request',
            status.HTTP_500_INTERNAL_SERVER_ERROR: 'Server Error'
        },
        operation_id='publisher-sign-up',
        operation_summary='Publisher signup'
    )
    def post(self, request: Request):
        serializer = PublisherSignUpSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        serializer.save()

        return Response('عملیات با موفقیت انجام شد.', status=status.HTTP_201_CREATED)


class PublisherLoginView(APIView):
    @swagger_auto_schema(
        request_body=PublisherLoginSerializer(),
        responses={
            status.HTTP_200_OK: openapi.Response(schema=openapi.Schema(
                type=openapi.TYPE_OBJECT,
                properties={
                    'refresh': openapi.Schema(type=openapi.TYPE_STRING, description=''),
                    'access': openapi.Schema(type=openapi.TYPE_STRING, description=''),
                },
                description=''
            ), description=''),
            status.HTTP_400_BAD_REQUEST: 'Bad Request',
            status.HTTP_404_NOT_FOUND: 'Not Found',
        }
    )
    def post(self, request: Request):
        serializer = PublisherLoginSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        refresh = RefreshToken.for_user(serializer.validated_data['user'])
        return Response({'refresh': str(refresh), 'access': str(refresh.access_token)})
