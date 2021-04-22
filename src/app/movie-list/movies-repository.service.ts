import { Injectable } from '@angular/core';

// RxJs
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

// model
import { Movie } from './models/movie.model';

@Injectable()
export class MoviesRepositoryService {
  private moviesEndpoint = 'api/movies';
  constructor(
    private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesEndpoint)
      .pipe(
        tap(_ => console.log(`fetched movies list`)),
      );
  }

  getMovieById(id: number): Observable<Movie> {
    const url = `${this.moviesEndpoint}/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(_ => console.log(`fetched movie with id=${id}`)),
    );
  }
}
