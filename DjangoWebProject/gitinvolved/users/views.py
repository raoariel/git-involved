from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import RequestContext, loader
from .models import User

def index(request):
    context = {'users_list': User.objects.all()}
    return render(request, 'users-marketplace/index.html', context)

def detail(request, username):
    user = get_object_or_404(User, username=username)
    return render(request, 'users-marketplace/detail.html', {'user': user})






