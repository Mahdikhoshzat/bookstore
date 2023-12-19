from rest_framework.exceptions import APIException, ValidationError


class DuplicateUsernameException(ValidationError):
    status_code = 400
    default_detail = 'نام کاربری تکراری است.'


class DuplicateEmailException(ValidationError):
    status_code = 400
    default_detail = 'ایمیل تکراری است.'
