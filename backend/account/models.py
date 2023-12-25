from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.translation import gettext_lazy as _

from book.models import Book


# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=100, unique=True)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    favorite_book = models.ManyToManyField(Book, verbose_name=_('favorite-book'), related_name='favorite_users')
    books = models.ManyToManyField(Book, verbose_name=_('books'), related_name='users')

    def __str__(self):
        return self.email
