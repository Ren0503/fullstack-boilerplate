from django.db import models
from django.contrib.auth.models import User
import uuid

# Create your models here.


class Post(models.Model):
    _id = models.UUIDField(default=uuid.uuid4,  unique=True,
                           primary_key=True, editable=False)
    user = models.ForeignKey(
        User, on_delete=models.SET_NULL, null=True, blank=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    description = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title