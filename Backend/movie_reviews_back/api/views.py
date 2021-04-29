from django.http.response import JsonResponse
from api.models import Genre
from api.models import Movie
from api.models import User
from api.models import Comment


def genres_list(request):
    genres = Genre.objects.all()
    genres_json = [genre.to_json() for genre in genres]
    print(genres_json)
    return JsonResponse(genres_json, safe=False)


def genres_movies(request, genre_id):
    try:
        movies = Movie.objects.filter(genre=genre_id)
    except Genre.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    movies_json = [movie.to_json() for movie in movies]
    return JsonResponse(movies_json, safe=False)


def movies_list(request):
    movies = Movie.objects.all()
    movies_json = [movie.to_json() for movie in movies]
    print(movies_json)
    return JsonResponse(movies_json, safe=False)


def movies_detail(request, movie_id):
    try:
        movie = Movie.objects.get(id=movie_id)
    except Movie.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(movie.to_json())


def users_list(request):
    users = User.objects.all()
    users_json = [user.to_json() for user in users]
    print(users_json)
    return JsonResponse(users_json, safe=False)


def users_detail(request, user_id):
    try:
        user = User.objects.get(id=user_id)
    except User.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(user.to_json())


def comments_list(request):
    comments = Comment.objects.all()
    comments_json = [comment.to_json() for comment in comments]
    print(comments_json)
    return JsonResponse(comments_json, safe=False)


def comments_detail(request, comment_id):
    try:
        comment = Comment.objects.get(id=comment_id)
    except Comment.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)
    return JsonResponse(comment.to_json())
