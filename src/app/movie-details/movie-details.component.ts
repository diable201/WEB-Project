import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../movie.service';
import {movies} from '../movies';
import {Location} from '@angular/common';
import {Commentary} from '../commentary';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;
  comments: Commentary[] = [];
  @Input() isLiked = false;
  review = false;
  

  constructor(
    private route: ActivatedRoute,
    private moviesService: MovieService,
    private location: Location,
    
  ) {
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie(): void {
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('id'));
    this.movie = movies.find(movie => movie.id === movieIdFromRoute);
  }
  goBack(): void {
    this.location.back();
  }

  onClick(): void{
    if (this.isLiked === false) {
      this.movie.like += 1;
      this.isLiked = true;
    } else {
      this.movie.like -= 1;
      this.isLiked = false;
    }
  }

  addComment(username: string, body: string): void {
    username = username.trim();
    body = body.trim();
    this.comments.push({username, body} as Commentary);
    this.review = true;
  }

  deleteComment(comment): void {
    const index: number = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }


  share(movie): void {
    window.alert(`The movie ${movie.name} has been shared!`);
    window.open(`https://t.me/share/url?url=http://localhost:4200/movies/${movie.id}&text=Hi! Watch this movie ${movie.name} on the Geek Street.`);
  }
}

