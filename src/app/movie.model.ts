/**
 * based on OMDB API data Response
 */
export class Movie{

    private _id: string; // imdbID
    private _title: string;
    private _year: string;
    private _runtime: string ;
    private _genre: string;
    private _director: string;

    constructor(id,t,y,r,g,d){
        this._id = id;
        this._title = t;
        this._year = y;
        this._runtime = r;
        this._genre = g;
        this._director = d;
    }

    
    /**
     * checks if all movie fields are valid
     * @returns true id all fields are valid
     */
    isValid(): boolean{
        let res = true;
        Object.values(this).forEach((val)=>{
            if(val === '' || val === null || val === 'undefined'){
                res = false;
            }
        });
        return res;
    }

    /**
   * 
   * @param 
   * @returns a movie object with sanitized fields
   */
    sanitize(): Movie{
        Object.keys(this).forEach((key: string) => {
            this[key] = this[key].replace(/[^a-zA-Z0-9 ]/g, '');
        });
        return this;
    }

    //getters & setters

    set id(arg: string) {
        this._id = arg;
    }

    get id(){
        return this._id;
    }
    
    set title(arg: string){
        this._title = arg; 
    }

     get title(){
        return this._title;
    }

    set year(arg: string) {
        this._year = arg;
    }

    get year() {
        return this._year;
    }

    set runtime(arg: string) {
        this._runtime = arg;
    }

    get runtime() {
        return this._runtime;
    }

    set genre(arg: string) {
        this._genre = arg;
    }

    get genre() {
        return this._genre;
    }

    set director(arg: string) {
        this._director = arg;
    }

    get director() {
        return this._director;
    }


}//EOC