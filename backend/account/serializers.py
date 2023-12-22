from rest_framework import serializers

from account.models import User
from utils.exception import DuplicateUsernameException, DuplicateEmailException


class SignUpSerializer(serializers.ModelSerializer):
    def validate(self, attrs):
        if User.objects.filter(username=attrs['username']).exists():
            raise DuplicateUsernameException

        if User.objects.filter(email=attrs['email']):
            raise DuplicateEmailException

        return attrs

    def create(self, validated_data):
        user = User.objects.create(email=validated_data['email'], username=validated_data['username'])
        user.set_password(validated_data['password'])
        user.save()

        return user

    class Meta:
        model = User
        fields = ['username', 'email', 'password']


class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password']
