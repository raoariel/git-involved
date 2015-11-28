from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import RequestContext, loader
from .models import ActiveProject

def index(request):
    return render(request, 'active-project-marketplace/index.html')





