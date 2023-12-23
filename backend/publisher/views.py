from drf_yasg.utils import swagger_auto_schema
from requests import Request
from rest_framework.views import APIView


# Create your views here.

class PublisherSignUpView(APIView):
    @swagger_auto_schema(
        request_body=
    )
    def post(self, request: Request):
        pass


class PublisherLoginView(APIView):
    def post(self, request: Request):
        pass
