import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Movie} from './movies';
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
  getMovies(): Observable<Movie[]> {
    return of(movies);
  }

  getMoviesByGenreId(id: number): Observable<Movie[]> {
    return of(movies.filter(movie => movie.genreId === id));
  }
}
