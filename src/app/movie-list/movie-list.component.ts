import {Component, OnInit} from '@angular/core';
import {movies} from '../movies';
import {Movie} from './models/movie.model';
import {Genre} from './models/genre.model';
import { MoviesRepositoryService } from './movies-repository.service';
import { Location } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { FilterMoviesService } from './filter-movies-service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = movies;

  searchText: any = '';

  constructor() {}

  ngOnInit(): void {

  }


  // removeUpload(product): void {
  //   // get index/position of uploadItem within array
  //   const index: number = this.products.indexOf(product);
  //   // if index returned is negative it means element not found in array
  //   // else: (positive) index can be used
  //   // e.g. to remove the single element at this position
  //   if (index !== -1) {
  //     this.products.splice(index, 1);
  //   }
  // }
  //
  // onNotify(): void {
  //   window.alert('You will be notified when the product goes on sale');
  // }


  share(movie): void {
    window.alert(`The product ${movie.name} has been shared!`);
    window.open(`https://t.me/share/url?url=${movie.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }
}

