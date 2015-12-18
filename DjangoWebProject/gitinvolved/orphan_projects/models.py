from django.db import models
import string

class OrphanProject(models.Model):
    projectName = models.CharField(max_length=20)
    owner = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    # can add things like stars later

    def __str__(self):
      return self.projectName

