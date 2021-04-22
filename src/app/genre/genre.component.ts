import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MovieService} from '../movie.service';
import {GenreService} from '../genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {
  movies: any;
  genre: any;
  searchText: any = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: MovieService,
    private categoryService: GenreService
  ) {
    this.router.events.subscribe((value => {
      this.getMovies();
      this.getGenre();
    }));
  }
  ngOnInit(): void {
    this.getMovies();
    this.getGenre();
  }

  getMovies(): void {
    const id: number = +this.route.snapshot.paramMap.get('genreId');
    this.productService.getMoviesByGenreId(id).subscribe(movies => this.movies = movies);
  }

  getGenre(): void {
    const id = +this.route.snapshot.paramMap.get('genreId');
    this.categoryService.getGenre(id).subscribe(genre => this.genre = genre);
  }

  share(movie): void {
    window.alert(`The product ${movie.name} has been shared!`);
    window.open(`https://t.me/share/url?url=${movie.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }

  // onNotify(): void {
  //   window.alert('You will be notified when the product goes on sale');
  // }
  //
  // removeUpload(product): void {
  //   const index: number = this.products.indexOf(product);
  //   if (index !== -1) {
  //     this.products.splice(index, 1);
  //   }
  // }
}
