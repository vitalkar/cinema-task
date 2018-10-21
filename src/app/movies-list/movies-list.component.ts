import { Component, OnInit, OnDestroy} from '@angular/core';
import { DataService } from '../data.service';
import { Subscription, Observable } from 'rxjs';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {

  moviesList: Array<Movie>;//
  editMovie: Movie;// current movie ref for edit purpose
  showDeleteWindow: boolean;//
  getNewMoviesSubscription: Subscription;//
  editWarningMsg: string;
  numberErrorMsg: string;


  constructor(private moviesService: DataService) {
    this.moviesList = new Array<Movie>();
    this.editMovie = new Movie('','','','','','');
    this.showDeleteWindow = false;
    this.editWarningMsg = 'all fields must be filled';
    this.numberErrorMsg = '# invalid number';
    //example
    this.moviesList.push(new Movie('tt00000','the matrix','1999','100','bla','cohen brothers'));
  }

  ngOnInit() {
    this.moviesService.updateMoviesList(this.moviesList);
    //create a subscription for new movies to be added
    this.getNewMoviesSubscription = this.moviesService.getMovies().subscribe(
      (data: any) => {
        if (data) {    
          //push a new Movie object 
          this.moviesList.push(new Movie(data.imdbID, data.Title, data.Year, data.Runtime, data.Genre, data.Director));
          this.moviesService.updateMoviesList(this.moviesList);
        }
      }
    );       
  }

  /**
   * edit a praticular movie fields
   * @param movie: movie instance to edit
   */
  editMovieDetails(movie: Movie) :void{
    if (typeof movie !== 'undefined' || movie !== null){
      this.editMovie = Object.assign(this.editMovie, movie);//clone the current movie for editing purpose       
    }
  }

  /**
   * saves the edited movie into the movies list
   * @param id: movie id
   */
  save(id: string): void{
    //check for title duplicity and empty fields
    if (this.editMovie.isValid()){
       this.moviesList[this.getMovieIndex(id)] = 
      Object.assign(new Movie('','','','','',''),this.editMovie.sanitize());
      this.moviesService.updateMoviesList(this.moviesList);
    } 
  }
  
  /**
   * deletes a movie form the list 
   * @param id: movie ID
   */
  deleteMovie(id: string): void{
    let index = this.getMovieIndex(id);
    this.moviesList.splice(index, 1);
  }

  /**
 * gets the movie index of the movie list via movie id
 * @param id: movie id
 * @returns the index of the particular movie
 */
  getMovieIndex(id: string): number{
    return this.moviesList.findIndex((movie) => {
      return id === movie.id;
    });
  }

  /**
   * set the value that toggels the delete option window
   */
  toggleDeleteWindow(): void{
    this.showDeleteWindow = !this.showDeleteWindow;
  }

  ngOnDestroy(){
    this.getNewMoviesSubscription.unsubscribe();
  }
}//EOC
