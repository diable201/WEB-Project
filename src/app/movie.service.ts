import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Movie} from './movie-list/models/movie.model';
import {HttpClient} from '@angular/common/http';
import {movies} from './movies';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private client: HttpClient) {
  }
  //
  // getMovies(): Observable<any> {
  //   return this.client.get<any>(`${this.BASE_URL}/`);
  // }

  getMovie(id: number): Observable<any> {
    return of(movies.find(movie => movie.id === id));
  }

  getMovies(): Observable<any> {
    return of(movies);
  }

  getMoviesByGenreId(id: number): Observable<any> {
    return of(movies.filter(movie => movie.genreId === id));
  }
}
