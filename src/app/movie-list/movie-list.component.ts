import {Component, OnInit} from '@angular/core';
import {movies} from '../movies';
import { Location } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

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
  share(movie): void {
    window.alert(`The product ${movie.name} has been shared!`);
    window.open(`https://t.me/share/url?url=${movie.link}&text=Hi! Look what I\'ve found on the Amazon.`
    );
  }
}

