import {Component, OnInit} from '@angular/core';
import {GenreService} from '../genre.service';
@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {
  genres: any;

  constructor(private genreService: GenreService) {
  }

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.genreService.getGenres().subscribe(genres => this.genres = genres);
  }
}
