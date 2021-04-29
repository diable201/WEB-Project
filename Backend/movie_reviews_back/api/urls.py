from django.urls import path
from api.views import *

urlpatterns = [
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', movies_list),
    path('movies/<int:movie_id>/', movies_detail),
    path('users/', users_list),
    path('users/<int:user_id>/', users_detail),
    path('comments/', comments_list),
    path('comments/<int:comment_id>/', comments_detail)
]
