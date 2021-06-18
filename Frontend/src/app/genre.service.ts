import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Genre} from './genres';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private client: HttpClient) {
  }

  BASE_URL = 'http://localhost:8000';

  getGenre(id: any): Observable<Genre> {
    return this.client.get<Genre>(`${this.BASE_URL}/api/genres/${id}/`);
  }

  getGenres(): Observable<Genre[]> {
    return this.client.get<Genre[]>(`${this.BASE_URL}/api/genres/`);
  }
}
