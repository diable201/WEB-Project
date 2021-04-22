import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {movies} from '../movies';
// import {CartService} from '../cart.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie;

  // addToCart(product): void {
  //   this.cartService.addToCart(product);
  //   window.alert('Your product has been added to the cart!');
  // }

  constructor(
    private route: ActivatedRoute,
    // private cartService: CartService
  ) {
  }

  ngOnInit(): void {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const movieIdFromRoute = Number(routeParams.get('id'));

    // Find the product that correspond with the id provided in route.
    this.movie = movies.find(movie => movie.id === movieIdFromRoute);
  }

}
