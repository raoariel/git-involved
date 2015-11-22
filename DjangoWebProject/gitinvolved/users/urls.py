from django.conf.urls import url
from . import views

urlpatterns = [
    # /user/
    url(r'^$', views.index, name='index'),
    # /user/arielrao/
    url(r'^(?P<username>[\w]+)/$', views.detail, name='detail'),
]