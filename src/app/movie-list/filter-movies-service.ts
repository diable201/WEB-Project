import { Injectable } from '@angular/core';

@Injectable()
export class FilterMoviesService {
  constructor() { }

  filterMovies(filter: string, movies: any) {
    if (!filter || filter === 'all') {
      return movies;
    }
    return movies.filter((c: { genres: string | string[]; }) => c.genres.includes(filter));
  }
}
