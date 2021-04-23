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

}

