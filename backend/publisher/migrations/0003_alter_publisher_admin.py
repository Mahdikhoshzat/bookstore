# Generated by Django 4.2 on 2023-12-25 12:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('publisher', '0002_remove_role_permissions_alter_publisher_options_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publisher',
            name='admin',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='publisher_admin', to='publisher.publisheruser', verbose_name='admin'),
        ),
    ]
