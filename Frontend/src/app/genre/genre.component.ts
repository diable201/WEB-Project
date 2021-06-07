import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {GenreService} from '../genre.service';
import {Movie} from '../movies';
import {Genre} from '../genres';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  movies: Movie[] = [];
  genre: Genre;
  searchText: any = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private moviesService: MovieService,
    private genresService: GenreService
  ) {
  }

  ngOnInit(): void {
    this.getGenre();
    this.getMovies();
  }

  getMovies(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.moviesService.getMoviesByGenreId(id).subscribe((data) => {
          this.movies = data;
          console.log(data);
        });
      }
    });
  }

  getGenre(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id !== null) {
        this.genresService.getGenre(id).subscribe((data) => {
          this.genre = data;
          console.log(data);
        });
      }
    });
  }
}
