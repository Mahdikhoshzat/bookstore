from rest_framework.exceptions import APIException


class DuplicatePublisherSlugException(APIException):
    default_detail = 'اسلاگ برای انتشارات تکراری است.'
    default_code = 'duplicate-publisher-slug'


class UserNotFoundException(APIException):
    default_detail = 'نام کاربری یا کلمه عبور اشتباه است.'
    default_code = 'user-not-found-exception'


class PublisherNotFoundException(APIException):
    default_detail = 'انتشارات پیدا نشد.'
    default_code = 'publisher-not-found'
