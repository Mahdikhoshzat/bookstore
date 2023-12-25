from rest_framework import serializers

from account.models import User
from bookstore.exceptions import DuplicatePublisherSlugException, UserNotFoundException, PublisherNotFoundException
from publisher.models import Publisher, PublisherUser


class PublisherSignUpSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True)
    slug = serializers.CharField(required=True)

    def validate(self, attrs):
        if Publisher.objects.filter(slug=attrs['slug']).exists():
            raise DuplicatePublisherSlugException

        if user := User.objects.filter(username=attrs['username']).first():
            if user.check_password(attrs['password']):
                attrs['user'] = user
                return attrs
        raise UserNotFoundException

    def save(self, **kwargs):
        data = self.validated_data
        publisher = Publisher.objects.create(slug=data['slug'], name=data['slug'])
        publisher_user = PublisherUser.objects.create(user=data['user'], publisher=publisher)
        publisher.admin = publisher_user
        publisher_user.save()
        return publisher


class PublisherLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
    slug = serializers.CharField()

    def validate(self, attrs):
        if publisher := Publisher.objects.filter(slug=attrs['slug']).first():
            if user := User.objects.filter(username=attrs['username']).first():
                if user.check_password(attrs['password']):
                    if PublisherUser.objects.filter(user=user, publisher=publisher).exists():
                        attrs['user'] = user
                        return attrs
            raise UserNotFoundException
        else:
            raise PublisherNotFoundException
