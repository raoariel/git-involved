from django.db import models
import string

class User(models.Model):
    username = models.CharField(max_length=20)
    skills = models.CharField(max_length=200)
    interests = models.CharField(max_length=200)

    


