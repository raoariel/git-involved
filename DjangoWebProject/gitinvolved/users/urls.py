from django.conf.urls import url
from . import views

urlpatterns = [
    # /user/
    url(r'^$', views.index, name='index'),
]