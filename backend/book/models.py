from django.core.validators import MinValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

from publisher.models import Publisher


# Create your models here.
class Category(models.Model):
    title = models.CharField(max_length=64, verbose_name=_('title'))

    class Meta:
        verbose_name = _('category')
        verbose_name_plural = _('categories')

    def __str__(self):
        return self.title


class Book(models.Model):
    title = models.CharField(max_length=64, verbose_name=_('title'))
    price = models.IntegerField(verbose_name=_('price'), validators=[MinValueValidator(0)])
    categories = models.ManyToManyField(Category, verbose_name=_('categories'))
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, verbose_name=_('publisher'))

    class Meta:
        verbose_name = _('book')
        verbose_name_plural = _('books')

    def __str__(self):
        return self.title
