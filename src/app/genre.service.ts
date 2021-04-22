import {Injectable} from '@angular/core';
import {genres} from './genres';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor() {
  }

  getGenre(id: any): Observable<any> {
    return of(genres.find(genre => genre.id === id));
  }

  getGenres(): Observable<any> {
    return of(genres);
  }
}
