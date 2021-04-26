import {Injectable} from '@angular/core';
import {genres} from './genres';
import {Observable, of} from 'rxjs';
import {Genre} from './genres';
import {HttpClient} from '@angular/common/http';
import {Movie} from './movies';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private client: HttpClient) {
  }
  BASE_URL = 'http://localhost:4200';
  getGenre(id: any): Observable<Genre> {
    // return this.client.get<Genre>(`${this.BASE_URL}/genre/genreId`);
    return of(genres.find(genre => genre.id === id));
  }

  getGenres(): Observable<Genre[]> {
    // return this.client.get<Genre[]>(`${this.BASE_URL}/genre`);
    return of(genres);
  }
}
