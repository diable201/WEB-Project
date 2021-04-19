import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  // movie: Movie = null;
  error: null = null;

  // constructor(private moviesRepositoryService: MoviesRepositoryService,
  //             private activatedRoute: ActivatedRoute) {
  //
  // }

  ngOnInit(): void {
    // const { id } = this.activatedRoute.snapshot.params;
    // this.getMovie(+id);
  }

  getMovie(id: number): void {
    // this.moviesRepositoryService.getMovieById(id)
    //   .subscribe(
    //       (data: any) => this.movie = data,
    //       (err: null) => this.error = err
    //   );
  }

}
