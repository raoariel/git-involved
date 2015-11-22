from django.db import models
import string

class User(models.Model):
    username = models.CharField(max_length=20)
    skills = models.CharField(max_length=200)
    interests = models.CharField(max_length=200)
    profile_link = models.CharField(max_length=150)

    def __str__(self):
      return self.username

    def getSkills(self):
      return (self.skills).split(",")

    def getInterests(self):
      return (self.interests).split(",")


