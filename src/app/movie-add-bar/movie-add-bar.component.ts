import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-movie-add-bar',
  templateUrl: './movie-add-bar.component.html',
  styleUrls: ['./movie-add-bar.component.css'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})

export class MovieAddBarComponent  {

  movieSearchList: any;
  searchQuery: string;//
  showSearchResults : boolean;//

  constructor(private movieService: DataService, private location: Location) {
    this.movieSearchList = [];
    this.showSearchResults = false;
    this.searchQuery = '';
    // location.replaceState(this.location.path());
  }

  /**
   * get related movies based on search query and assigns them to the movie search list
   * @param query: search query
   */
  getMovies(query: string): void{
    //get a list of movies based on the search query
    this.movieService.getRelatedMovies(query)
    .then((data: Promise<any>)=>{
      if (typeof data['Search'] === 'undefined') {
        this.showSearchResults = false;        
      } else {
        this.movieSearchList = data['Search']; //assign the movie results from the promise
        this.showSearchResults = true;
      }
    });
  }

  /**
   * add a movie via movies service
   * @param movie: 
   */
  addMovie(movie: any): void{
    this.showSearchResults = false; // close search results dropdown
    this.movieService.getMovieDetails(movie.imdbID)//get the full movie object
    .then((res)=>{
      this.movieService.addNewMovie(res);//add a new movie to the movie list via movies service
      this.searchQuery = null;//clear the search input
    }); 

  }

}
