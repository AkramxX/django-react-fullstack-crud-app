from django.contrib import admin
from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register(r'countries', CountryViewset, basename='countries')
router.register(r'leagues', LeagueViewset, basename='leagues')
router.register(r'characteristics', CharacteristicViewset, basename='characteristics')
router.register(r'footballclubs', FootballClubViewset, basename='footballclubs')
urlpatterns = router.urls