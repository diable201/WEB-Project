import {Component, OnInit} from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-movie-like',
  templateUrl: './movie-like.component.html',
  styleUrls: ['./movie-like.component.css']
})
export class MovieLikeComponent implements OnInit {
  @Input() movie;
  @Input() likesCount = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(): void {
    this.likesCount += 1;
  }
}
