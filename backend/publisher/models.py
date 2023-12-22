from django.db import models
from django.utils.translation import gettext_lazy as _


# Create your models here.
class Publisher(models.Model):
    name = models.CharField(max_length=200, verbose_name=_('name'))
    slug = models.SlugField(max_length=200, unique=True, verbose_name=_('slug'))
    admin = models.ForeignKey('PublisherUser', on_delete=models.CASCADE, verbose_name=_('admin'))

    class Meta:
        verbose_name = _('publisher')
        verbose_name_plural = _('publishers')

    def __str__(self):
        return self.name


class PublisherUser(models.Model):
    user = models.OneToOneField('account.User', on_delete=models.CASCADE, verbose_name=_('user'))
    publisher = models.ForeignKey(Publisher, on_delete=models.CASCADE, verbose_name=_('publisher'))

    class Meta:
        verbose_name = _('publisher-user')
        verbose_name_plural = _('publisher-users')

    def __str__(self):
        return self.user.email
