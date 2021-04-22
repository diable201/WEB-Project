import {Injectable} from '@angular/core';
import {genres} from './genres';
import {Observable, of} from 'rxjs';
import {Genre} from './genres';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor() {
  }

  getGenre(id: any): Observable<Genre> {
    return of(genres.find(genre => genre.id === id));
  }

  getGenres(): Observable<Genre[]> {
    return of(genres);
  }
}
