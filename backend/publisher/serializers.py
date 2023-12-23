from rest_framework import serializers


class PublisherSignUpSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    email = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    publisher_slug = serializers.CharField(required=True)

    def save(self, **kwargs):
        
