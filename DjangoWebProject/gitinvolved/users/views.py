from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from django.template import RequestContext, loader
import json
from django.db.models import Q
from models import User

def index(request):
    context = {'users_list': User.objects.all()}
    return render(request, 'users-marketplace/index.html', context)

def detail(request, username):
    user = get_object_or_404(User, username=username)
    return render(request, 'users-marketplace/detail.html', {'user': user})

def getUsers(request):
    try:
        users = User.objects.all()
        user_profiles = dict()
        for user in users:
          user_profiles[user.username] = [user.skills,user.interests]
        return HttpResponse(json.dumps(user_profiles, ensure_ascii=False))
    except:
        return HttpResponse("Failed")

def searchUsers(request):
    try:
        params = request.GET["params"]
        param_list = params.split(":")
        param_list = [x for x in param_list if x != ""]
        users = User.objects.all()
        user_profiles = dict()
        for user in users:
          for p in param_list:
              print(p,user.skills,user.interests)
              if ((p in user.skills) or (p in user.interests)):
                  print(user.username)
                  user_profiles[user.username] = [user.skills,user.interests]
        print(user_profiles)
        return HttpResponse(json.dumps(user_profiles, ensure_ascii=False))
    except:
        return HttpResponse("Failed")


