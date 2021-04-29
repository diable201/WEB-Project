from django.urls import path
from .views import *

urlpatterns = [
    path('genres/', genres_list),
    path('genres/<int:genre_id>/', genres_movies),
    path('movies/', movies_list),
    path('movies/<int:movie_id>/', movies_detail),
    path('users/', UsersListAPIView.as_view()),
    path('users/<int:pk>/', UserDetailAPIView.as_view()),
    path('comments/', CommentsListAPIView.as_view()),
    path('comments/<int:pk>/', CommentDetailAPIView.as_view())
]
