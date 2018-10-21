import { Injectable } from '@angular/core';
import { HttpClient ,HttpResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiRoot: string;
  private apiKey: string;
  private subject: Subject<any>; //
  private moviesListRef: Array<Movie>;

  constructor(private http: HttpClient) {
    this.subject = new Subject();
    this.apiRoot = 'https://www.omdbapi.com/?';
    this.apiKey = 'apikey=67bfe15b';
    this.moviesListRef = new Array<Movie>();
  }

  /**
   * @param id: movie id / IMDB id
   * @returns 
   */
  getMovieDetails(id: string ): Promise<any>{
     return this.http.get(this.apiRoot + this.apiKey + '&i=' + id).toPromise()
  }

  /**
   * sends a movie info 
   * @param movie: movie info
   */
  addNewMovie(movie: any): void{
    if (!(this.checkDuplicity(movie.Title))) {//if the movie is not in the list already, add it  
      this.subject.next(movie);
    }
  }

  /**
   * @returns an observable that listens to to new movies additions
   */
  getMovies(): Observable<any>{
    return this.subject.asObservable();   
  }

  /**
   * search for related movies based on the search query
   * @param query: search query 
   * @returns a promise
   */
  getRelatedMovies(query: string): Promise<any>{
    let apiURL = this.apiRoot + this.apiKey + '&type=movie&s=' + query;//consturcts the data URL
    return this.http.get(apiURL).toPromise();
  }
  
  /**
   * updates moviesListRef when a new movie has been added
   * @param movieList:
   */
  updateMoviesList(movieList: Array<Movie>): void{
    this.moviesListRef = movieList;
  }

  /**
 * checks for title duplicates
 * @param title: new movie title
 * @returns true if there is a duplicity in titles, otherwise returns false
 */
  checkDuplicity(title: string): boolean {
    let res = false;
    title = title.toLowerCase().trim();
    this.moviesListRef.forEach((movie: Movie) => {
      if (title === (movie.title.toLowerCase().trim())) {
        res = true;
      }
    });    
    return res;
  }
}//EOC
