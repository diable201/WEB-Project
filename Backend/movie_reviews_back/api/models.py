from django.db import models
from django.contrib.auth.models import User


class Genre(models.Model):
    name = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'Genre'
        verbose_name_plural = 'Genres'

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class Movie(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    rate = models.CharField(max_length=300)
    length = models.CharField(max_length=300)
    img = models.CharField(max_length=300)
    cover = models.CharField(max_length=300)
    like = models.IntegerField(default=0)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    # comment = models.ForeignKey(Comment, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Movie'
        verbose_name_plural = 'Movies'

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'rate': self.rate,
            'length': self.length,
            'img': self.img,
            'cover': self.cover,
            'like': self.like,
            'genre': {
                'id': self.genre.id,
                'name': self.genre.name
            },
            # 'comment': {
            #     'id': self.comment.id,
            #     'name': self.comment.user.username,
            #     'description': self.comment.description
            # }
        }


class User(models.Model):
    name = models.CharField(max_length=300)
    surname = models.CharField(max_length=300)
    username = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=300)
    img = models.CharField(max_length=300)

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def __str__(self):
        return f'{self.id}, {self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'surname': self.surname,
            'username': self.username,
            'email': self.email,
            'password': self.password,
            'img': self.img,
        }


class Comment(models.Model):
    username = models.CharField(max_length=300)
    description = models.TextField(default='')
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Comment'
        verbose_name_plural = 'Comments'

    def __str__(self):
        return f'{self.id}, {self.username}'

    def to_json(self):
        return {
            'id': self.id,
            # 'username': self.username,
            'description': self.description,
            'username': {
                'id': self.user.id,
                'name': self.user.name
            },
            'movie': {
                'id': self.movie.id,
                'name': self.movie.name
            }
        }
