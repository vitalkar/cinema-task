(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html,body{\n    height: 100%;\n}\n\n.movies_conatiner{\n    height: 100%;\n    width: 100%;\n    /* background: url('/assets/img/bg.png') no-repeat fixed center; */\n    background: url('https://image.freepik.com/free-vector/sketches-of-cinema-objects-background_23-2147597658.jpg') no-repeat fixed center;\n    background-size: cover;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movies_conatiner container-fluid\">\n    <app-movie-add-bar></app-movie-add-bar>\n    <app-movies-list></app-movies-list>\n    <app-footer></app-footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./movies-list/movies-list.component */ "./src/app/movies-list/movies-list.component.ts");
/* harmony import */ var _movie_add_bar_movie_add_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./movie-add-bar/movie-add-bar.component */ "./src/app/movie-add-bar/movie-add-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./movie-item/movie-item.component */ "./src/app/movie-item/movie-item.component.ts");
/* harmony import */ var _numberValidator_validator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./numberValidator.validator */ "./src/app/numberValidator.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"],
                _movie_add_bar_movie_add_bar_component__WEBPACK_IMPORTED_MODULE_6__["MovieAddBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _movie_item_movie_item_component__WEBPACK_IMPORTED_MODULE_8__["MovieItemComponent"],
                _numberValidator_validator__WEBPACK_IMPORTED_MODULE_9__["NumberValidator"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.apiRoot = 'https://www.omdbapi.com/?';
        this.apiKey = 'apikey=67bfe15b';
        this.moviesListRef = new Array();
    }
    /**
     * @param id: movie id / IMDB id
     * @returns
     */
    DataService.prototype.getMovieDetails = function (id) {
        return this.http.get(this.apiRoot + this.apiKey + '&i=' + id).toPromise();
    };
    /**
     * sends a movie info
     * @param movie: movie info
     */
    DataService.prototype.addNewMovie = function (movie) {
        if (!(this.checkDuplicity(movie.Title))) { //if the movie is not in the list already, add it  
            this.subject.next(movie);
        }
    };
    /**
     * @returns an observable that listens to to new movies additions
     */
    DataService.prototype.getMovies = function () {
        return this.subject.asObservable();
    };
    /**
     * search for related movies based on the search query
     * @param query: search query
     * @returns a promise
     */
    DataService.prototype.getRelatedMovies = function (query) {
        var apiURL = this.apiRoot + this.apiKey + '&type=movie&s=' + query; //consturcts the data URL
        return this.http.get(apiURL).toPromise();
    };
    /**
     * updates moviesListRef when a new movie has been added
     * @param movieList:
     */
    DataService.prototype.updateMoviesList = function (movieList) {
        this.moviesListRef = movieList;
    };
    /**
   * checks for title duplicates
   * @param title: new movie title
   * @returns true if there is a duplicity in titles, otherwise returns false
   */
    DataService.prototype.checkDuplicity = function (title) {
        var res = false;
        title = title.toLowerCase().trim();
        this.moviesListRef.forEach(function (movie) {
            if (title === (movie.title.toLowerCase().trim())) {
                res = true;
            }
        });
        return res;
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}()); //EOC



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\n    background-image: linear-gradient(to right,#9568ad,#6a1399,#9568ad);\n    border: 1px solid whitesmoke;\n    height: 10%;\n    border-bottom-left-radius: 50%;\n    border-bottom-right-radius: 50%;\n}\n\nh3{\n    color: whitesmoke;\n    letter-spacing: 2px;\n}\n\nh3::first-letter{\n    color: #cf9800;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"container d-flex flex-column justify-content-center align-items-center\">\n  <h3>{{footerText | titlecase}} &copy;</h3>\n  <a style=\"color:white;\" href='https://www.freepik.com/free-vector/movie-theater-red-seats-and-cimena-screen_719933.htm'>Background img Designed by Freepik</a>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.footerText = 'herolo cinema';
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/movie-add-bar/movie-add-bar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/movie-add-bar/movie-add-bar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie_add_container{\n    width: 100%;\n    background-image: linear-gradient(to right,#9568ad,#6a1399,#9568ad);\n    border: 1px solid whitesmoke;\n    height: 10%;\n    border-top-left-radius: 50%;\n    border-top-right-radius: 50%;\n}\n\n#movies_list{\n    list-style-type: none;\n    padding: 0;\n}\n\n#search_form{\n    width: 100%; \n}\n\ninput[type=search]{\n    outline: none;\n    box-shadow: none;\n    border: none;\n    caret-color: #87008b;\n    background-color: whitesmoke;\n    color: #360638;\n    width: 70%;\n    margin: 1.8em auto 0 auto ;\n    border-radius: 10px;\n    padding:0 5%;    \n    font-family: 'FontAwesome','Courier New', Courier, monospace;\n    font-size: 26px;\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n\ninput[type=search]:focus{\n        box-shadow: 3px 3px 10px #cf9800 inset ,-3px -3px 10px #cf9800 inset ;\n}\n\n::-webkit-input-placeholder{\n    color: #cf9800;\n    font-size: 24px;\n}\n\n::-ms-input-placeholder{\n    color: #cf9800;\n    font-size: 24px;\n}\n\n::placeholder{\n    color: #cf9800;\n    font-size: 24px;\n}\n\n#add_bar{\n    position: relative;\n}\n\n#movies_dropdown{\n    height:auto;\n    width: 100%;\n    opacity: 1;\n    position: absolute;\n    left:0px;\n    top: 100%;\n    z-index: 100;\n}\n\n#movies_dropdown_footer{\n    border: 4px solid #cf9800;\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n}\n\n.hr_dropdown{\n    border: 4px solid #cf9800;\n    background-image: #cf9800;\n    margin: 0;\n}\n\n.search_item{\n    display: flex;\n    align-items: baseline;\n    justify-content: center;\n}\n\n#search_item_header{\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    font-weight: 500;\n    background-image: linear-gradient(to right,#9568ad,#6a1399,#9568ad);\n    color: whitesmoke; \n}\n\n.header_field{\n    flex-basis: 30%;\n    color: #cf9800;\n}\n\n.movie_field{\n    flex-basis: 30%;\n}\n\n.btn_add{\n    padding-top: 2px;\n    outline: none;\n    background-color: inherit;\n    color: #9772aa;\n    border: 2px solid #9772aa;\n    cursor: pointer;\n    border-radius: 10px;\n    font-size: 1.5rem;\n    width: 3rem;\n    height: 3rem;\n    transition: 200ms;\n}\n\n.btn_add:hover{\n    background-color: #9772aa;\n    border-color: white;\n    color: #cf9800;\n}\n\n@media screen and (max-height: 800px){\n  input[type=search]{\n      margin-top: 1em;\n  }\n}\n\n@media screen and (max-height: 680px){\n  input[type=search]{\n      margin-top: 0.5em;\n  }\n}"

/***/ }),

/***/ "./src/app/movie-add-bar/movie-add-bar.component.html":
/*!************************************************************!*\
  !*** ./src/app/movie-add-bar/movie-add-bar.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"add_bar\" class=\"movie_add_container container\">\n  <form id=\"search_form\" autocomplete=\"off\" novalidate>\n    <input name=\"search\" class=\"form-control\" type=\"search\" placeholder=\" &#xf002;\"\n    (keyup)=\"getMovies(searchQuery)\" [(ngModel)]=\"searchQuery\" autofocus=\"autofocus\">\n  </form>\n  <ng-template [ngIf]=\"showSearchResults\">\n    <div id=\"movies_dropdown\">\n      <hr class=\"hr_dropdown\">\n      <ul id=\"movies_list\" class=\"list-group\">\n        <li id=\"search_item_header\">\n          <div class=\"header_field\">\n            Name\n          </div>\n          <div class=\"header_field\">\n            Year\n          </div>\n          <div class=\"header_field\">\n            IMDB id\n          </div>\n        </li>\n        <li class=\"search_item list-group-item\" *ngFor=\"let movie of movieSearchList\">\n          <div id=\"movie_title\" class=\"movie_field\">\n            {{movie.Title}}\n          </div>\n          <div id=\"movie_year\" class=\"movie_field\">\n            {{movie.Year}}\n          </div>\n          <div id=\"movie_id\" class=\"movie_field\">\n            {{movie.imdbID}}\n          </div>\n          <button class=\"btn_add\" (click)=\"addMovie(movie)\">\n            <i class=\"fa fa-plus\"></i>\n          </button>\n        </li>\n      </ul>\n      <hr class=\"hr_dropdown\">\n    </div>\n  </ng-template>\n</div>"

/***/ }),

/***/ "./src/app/movie-add-bar/movie-add-bar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/movie-add-bar/movie-add-bar.component.ts ***!
  \**********************************************************/
/*! exports provided: MovieAddBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieAddBarComponent", function() { return MovieAddBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MovieAddBarComponent = /** @class */ (function () {
    function MovieAddBarComponent(movieService, location) {
        this.movieService = movieService;
        this.location = location;
        this.movieSearchList = [];
        this.showSearchResults = false;
        this.searchQuery = '';
        // location.replaceState(this.location.path());
    }
    /**
     * get related movies based on search query and assigns them to the movie search list
     * @param query: search query
     */
    MovieAddBarComponent.prototype.getMovies = function (query) {
        var _this = this;
        //get a list of movies based on the search query
        this.movieService.getRelatedMovies(query)
            .then(function (data) {
            if (typeof data['Search'] === 'undefined') {
                _this.showSearchResults = false;
            }
            else {
                _this.movieSearchList = data['Search']; //assign the movie results from the promise
                _this.showSearchResults = true;
            }
        });
    };
    /**
     * add a movie via movies service
     * @param movie:
     */
    MovieAddBarComponent.prototype.addMovie = function (movie) {
        var _this = this;
        this.showSearchResults = false; // close search results dropdown
        this.movieService.getMovieDetails(movie.imdbID) //get the full movie object
            .then(function (res) {
            _this.movieService.addNewMovie(res); //add a new movie to the movie list via movies service
            _this.searchQuery = null; //clear the search input
        });
    };
    MovieAddBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-add-bar',
            template: __webpack_require__(/*! ./movie-add-bar.component.html */ "./src/app/movie-add-bar/movie-add-bar.component.html"),
            styles: [__webpack_require__(/*! ./movie-add-bar.component.css */ "./src/app/movie-add-bar/movie-add-bar.component.css")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["PathLocationStrategy"] }]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], MovieAddBarComponent);
    return MovieAddBarComponent;
}());



/***/ }),

/***/ "./src/app/movie-item/movie-item.component.css":
/*!*****************************************************!*\
  !*** ./src/app/movie-item/movie-item.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie_item{\n    display: flex;\n    justify-content: space-around;\n    align-items: baseline;\n    background-color: whitesmoke;\n    border-radius: 5px;\n}\n\n.movie_title{\n    flex-basis: 45%;\n    -ms-grid-row-align: center;\n        align-self: center;\n}\n\n.movie_title::first-letter{\n    color: #6a1399;\n}\n\n.movie_details{\n    border-left: 3px solid #6a1399;\n    padding-left: 5px;\n    flex-basis: 50%;\n    display: flex;\n    flex-flow: column wrap;\n}\n\nh4{\n    overflow: hidden;\n    /* text-overflow: ellipsis; */\n}"

/***/ }),

/***/ "./src/app/movie-item/movie-item.component.html":
/*!******************************************************!*\
  !*** ./src/app/movie-item/movie-item.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie_item\">\n  <div class=\"movie_title\">\n    <h4 class=\"\">\n      {{movie.title | titlecase}}\n    </h4>\n    <small class=\"\">\n      Year: {{movie.year}}\n    </small>\n  </div>\n  <div class=\"movie_details\">\n    <small>\n      Runtime: {{movie.runtime}}\n    </small>\n    <small>\n      Genre: {{movie.genre | titlecase}}\n    </small>\n    <small >\n      Director: {{movie.director | titlecase}}\n    </small>\n    <small>\n      IMDB id: {{movie.id | titlecase}}\n    </small>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/movie-item/movie-item.component.ts":
/*!****************************************************!*\
  !*** ./src/app/movie-item/movie-item.component.ts ***!
  \****************************************************/
/*! exports provided: MovieItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieItemComponent", function() { return MovieItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../movie.model */ "./src/app/movie.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MovieItemComponent = /** @class */ (function () {
    function MovieItemComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _movie_model__WEBPACK_IMPORTED_MODULE_1__["Movie"])
    ], MovieItemComponent.prototype, "movie", void 0);
    MovieItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movie-item',
            template: __webpack_require__(/*! ./movie-item.component.html */ "./src/app/movie-item/movie-item.component.html"),
            styles: [__webpack_require__(/*! ./movie-item.component.css */ "./src/app/movie-item/movie-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MovieItemComponent);
    return MovieItemComponent;
}());



/***/ }),

/***/ "./src/app/movie.model.ts":
/*!********************************!*\
  !*** ./src/app/movie.model.ts ***!
  \********************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
/**
 * based on OMDB API data Response
 */
var Movie = /** @class */ (function () {
    function Movie(id, t, y, r, g, d) {
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
    Movie.prototype.isValid = function () {
        var res = true;
        Object.values(this).forEach(function (val) {
            if (val === '' || val === null || val === 'undefined') {
                res = false;
            }
        });
        return res;
    };
    /**
   *
   * @param
   * @returns a movie object with sanitized fields
   */
    Movie.prototype.sanitize = function () {
        var _this = this;
        Object.keys(this).forEach(function (key) {
            _this[key] = _this[key].replace(/[^a-zA-Z0-9 ]/g, '');
        });
        return this;
    };
    Object.defineProperty(Movie.prototype, "id", {
        get: function () {
            return this._id;
        },
        //getters & setters
        set: function (arg) {
            this._id = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (arg) {
            this._title = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "year", {
        get: function () {
            return this._year;
        },
        set: function (arg) {
            this._year = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "runtime", {
        get: function () {
            return this._runtime;
        },
        set: function (arg) {
            this._runtime = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "genre", {
        get: function () {
            return this._genre;
        },
        set: function (arg) {
            this._genre = arg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Movie.prototype, "director", {
        get: function () {
            return this._director;
        },
        set: function (arg) {
            this._director = arg;
        },
        enumerable: true,
        configurable: true
    });
    return Movie;
}()); //EOC



/***/ }),

/***/ "./src/app/movies-list/movies-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie_list_container{\n    border: 1px solid whitesmoke;\n    height: 80%;\n    max-height: 80%;\n    padding: 1rem 2rem;\n    overflow-y: auto;\n    background-image: linear-gradient(to right,#9568ad,#6a1399,#9568ad);\n}\n\nh1{\n    text-align: center;\n    color: whitesmoke;\n    letter-spacing: 3px;\n}\n\nh4{\n    overflow: hidden;\n    /* text-overflow: ellipsis; */\n}\n\nul{\n    list-style-type: none;\n    padding: 0;\n}\n\n.movie_list_item{\n    display: flex;\n    justify-content: space-between;\n    background-color: white;\n}\n\n.movie_item{\n    flex-basis: 90%;\n}\n\n/* .movie_title{\n    flex-basis: 45%;\n    align-self: center;\n}\n\n.movie_title::first-letter{\n    color: #6a1399;\n}\n\n.movie_details{\n    border-left: 3px solid #6a1399;\n    padding-left: 5px;\n    flex-basis: 50%;\n    display: flex;\n    flex-flow: column wrap;\n} */\n\n.movie_edit{\n    flex-basis: 5%;\n    -ms-grid-row-align: center;\n        align-self: center;\n}\n\n.fa-edit{\n    font-size: 2.5em;\n}\n\n.btn_edit{\n    flex-basis: 7%;\n    background-color: whitesmoke;\n    border: 3px solid #6a1399;\n    border-radius: 10px;\n    color: #6a1399;\n    outline: none;\n    cursor: pointer;\n    padding: 6px 6px 4px 6px;;\n}\n\n.btn_edit:hover{\n    background-color: #6a1399;\n    border: 3px solid #6a1399;\n    border-radius: 10px;\n    color: #cf9800;\n    outline: none;\n    padding: 6px 6px 4px 6px;\n    transition: 300ms;\n}\n\ninput[type=text]{\n    /* border: 3px solid black; */\n    width: 70%;\n    border-radius: 10px;\n    padding-left: 1rem;\n    outline: none;\n    border: none;\n    color: #6a1399;\n}\n\nlabel{\n    width: 25%;\n    min-width: 25%;\n    font-size: 1.2rem;\n    font-weight: 500;\n    color: whitesmoke;\n}\n\n#delete_window{\n    position: absolute;\n    top:0;\n    left:0;\n    opacity: 0.95;\n    background-color: whitesmoke;\n    width: 100%;\n    height: 100%;\n    text-align: center;\n}\n\n.btns_edit_disabled > button:hover{\n    background-color: #726a77 !important;\n    color: #726a77 !important;\n}\n\n.btns_edit_disabled > button:disabled{\n    background-color: #726a77 !important;\n    color: #726a77 !important;\n    border: 2x solid #726a77 !important;\n}\n\n#delete_text{\n    font-size: 2em;\n}\n\n.btn_cancel{\n    width: 30%;\n    border-radius: 15px;\n    background-color: whitesmoke;\n    color: #6a1399; \n    outline: none;\n    border: 2px solid #6a1399;\n    cursor: pointer;\n}\n\n.btn_cancel:hover{\n    background-color: #6a1399;\n    color: whitesmoke; \n    transition: 300ms;\n}\n\n#btn_delete{\n    width: 30%;\n    border-radius: 15px;\n    background-color: #726a77;\n    color: #6a1399; \n    outline: none;\n    border: none;\n    cursor: pointer;\n    border: 2px solid #6a1399;\n    transition: 300ms;\n\n}\n\n#btn_delete:hover{\n    background-color: #726a77;\n    border: 2px solid #9c1e15;\n    color: #9c1e15; \n}\n\n#btn_delete:disabled, .btn_cancel:disabled, #btn_save:disabled{\n    cursor: not-allowed;\n    background-color: #726a77 !important;\n    color: #726a77 !important;\n    border: 2x solid #726a77 !important;}\n\n#btn_save{\n    width: 30%;\n    border-radius: 15px;\n    background-color: #cf9800;\n    color: #6a1399; \n    outline: none;\n    border: 2px solid #6a1399;\n    cursor: pointer;\n    transition: 300ms;\n}\n\n#btn_save:hover{\n    background-color: #6a1399;\n    color: #cf9800; \n}\n\n#btn_save:disabled{\n    cursor: not-allowed;\n}\n\n#btn_ok{\n    width: 30%;\n    outline: none;\n    background-color: white;\n    border-radius: 15px;\n    border: 2px solid #6a1399;\n    color: #6a1399;\n    cursor: pointer;\n    transition: 300ms;\n}\n\n#btn_ok:hover{\n    background-color: #9c1e15;\n    border: 2px solid #cf9800;\n    color: #cf9800;\n}\n\n.highlight{\n    font-weight: 400;\n    font-size: 1.2em;\n    color: #cf9800;\n}\n\n#st_out{\n    color: #cf9800;\n    text-decoration:line-through;\n}\n\n#st_in{\n    color:#6a1399;\n    font-size: 1.2em;\n}\n\n#alert{\n   width: 100%;\n   text-align: center;\n   background-color: #9c1e15;\n   border: 2px solid whitesmoke;\n   color: whitesmoke;\n   font-size: 1.5em;\n   font-weight: 400;\n}\n\n.error_number{\n    width: 90%;\n    text-align: center;\n    background-color: #9c1e15;\n    color: whitesmoke;\n    border: 1px solid whitesmoke;\n    margin: 0 auto 5% auto;\n\n}\n\n/* Scrollbar styles */\n\n/* width */\n\n::-webkit-scrollbar {\n    width: 20px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n    /* box-shadow: inset 0 0 5px grey;  */\n    border-radius: 10px;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n    background: whitesmoke; \n    border: 2px solid #9568ad;\n    border-radius: 10px;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n    background: white;  \n}"

/***/ }),

/***/ "./src/app/movies-list/movies-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movie_list_container container\">\n  <ul class=\"list-group\">\n    <li class=\"movie_list_item list-group-item\" *ngFor=\"let movie of moviesList\">\n      \n      <div class=\"movie_item\">\n        <app-movie-item [movie]=\"movie\"></app-movie-item>\n      </div>\n          <button type=\"button\" class=\"btn_edit\" data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"editMovieDetails(movie)\">\n            <i class=\"fa fa-edit\"></i></button>\n    </li>\n  </ul>\n<!-- Edit Modal -->\n<div class=\"modal fade\" id=\"editModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"exampleModalLabel\">\n          <span id=\"st_out\">\n            <span id=\"st_in\">Movie Details</span>\n          </span>\n        </h4>\n      </div>\n      <div class=\"modal-body\">\n        <form #editForm=\"ngForm\" class=\"container\">\n          <div class=\"form-group\">\n            <input name=\"id\" id=\"id\" type=\"hidden\" [(ngModel)]=\"editMovie.id\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"title\">Title</label>\n            <input #title=\"ngModel\" name=\"title\" id=\"title\" type=\"text\" [value]=\"editMovie.title\" \n            [(ngModel)]=\"editMovie.title\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"year\">Year</label>\n            <input #year=\"ngModel\" ngModel name=\"year\" id=\"year\" type=\"text\" [value]=\"editMovie.year\" required\n             [(ngModel)]=\"editMovie.year\" numberValidator>\n          </div>\n          <div class=\"error_number\" *ngIf=\"year.errors?.numberValidator\">\n            {{numberErrorMsg | titlecase}}\n          </div>           \n          <div class=\"form-group\">\n            <label for=\"director\">Director</label>\n            <input #director name=\"director\" id=\"director\" type=\"text\" [value]=\"editMovie.director\" required [(ngModel)]=\"editMovie.director\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"runtime\">Runtime</label>\n            <input #runtime name=\"runtime\" id=\"runtime\" type=\"text\" [value]=\"editMovie.runtime\" required [(ngModel)]=\"editMovie.runtime\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"genre\">Genre</label>\n            <input #genre name=\"genre\" id=\"genre\" type=\"text\" [value]=\"editMovie.genre\" required [(ngModel)]=\"editMovie.genre\">\n          </div>\n          <div id=\"alert\" *ngIf=\"year.errors?.required || title.errors?.required \n                                || director.errors?.required || runtime.errors?.required || genre.errors?.required\">\n            {{editWarningMsg | titlecase}}<span class=\"highlight\">!</span>\n          </div>\n        </form>\n          <!-- delete template -->\n          <div id=\"delete_window\" class=\"d-flex flex-column\" *ngIf=\"showDeleteWindow\">\n            <p class=\"\" id=\"delete_text\">Are you sure you want to delete <span class=\"highlight\">\"</span>{{ editMovie.title | titlecase }}<span class=\"highlight\">\"?</span></p>\n            <div class=\"d-flex justify-content-around mt-auto\">\n              <button type=\"button\" class=\"btn_cancel\" (click)=\"toggleDeleteWindow()\">Cancel</button>\n              <button type=\"button\" id=\"btn_ok\" data-toggle=\"modal\" data-target=\"#editModal\" \n              (click)=\"deleteMovie(editMovie.id);toggleDeleteWindow()\">OK</button>\n            </div>\n          </div>\n          <!-- end of delete template -->\n      </div>\n      <div class=\"modal-footer\" [ngClass]=\"{'btns_edit_disabled': showDeleteWindow}\">\n          <button type=\"button\" id=\"btn_save\" class=\"\" data-dismiss=\"modal\"\n          [disabled]=\"!editForm.form.valid || showDeleteWindow\" (click)=\"save(editMovie.id)\">Save</button>\n          <button type=\"button\" class=\"btn_cancel\" data-dismiss=\"modal\" data-target=\"#editModal\" \n          [disabled]=\"showDeleteWindow\">Cancel</button>\n          <button type=\"button\" id=\"btn_delete\" [disabled]=\"showDeleteWindow\" (click)=\"toggleDeleteWindow()\">Delete</button>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/movies-list/movies-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movies-list/movies-list.component.ts ***!
  \******************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _movie_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.model */ "./src/app/movie.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(moviesService) {
        this.moviesService = moviesService;
        this.moviesList = new Array();
        this.editMovie = new _movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"]('', '', '', '', '', '');
        this.showDeleteWindow = false;
        this.editWarningMsg = 'all fields must be filled';
        this.numberErrorMsg = '# invalid number';
        //example
        this.moviesList.push(new _movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"]('tt00000', 'the matrix', '1999', '100', 'bla', 'cohen brothers'));
    }
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesService.updateMoviesList(this.moviesList);
        //create a subscription for new movies to be added
        this.getNewMoviesSubscription = this.moviesService.getMovies().subscribe(function (data) {
            if (data) {
                //push a new Movie object 
                _this.moviesList.push(new _movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"](data.imdbID, data.Title, data.Year, data.Runtime, data.Genre, data.Director));
                _this.moviesService.updateMoviesList(_this.moviesList);
            }
        });
    };
    /**
     * edit a praticular movie fields
     * @param movie: movie instance to edit
     */
    MoviesListComponent.prototype.editMovieDetails = function (movie) {
        if (typeof movie !== 'undefined' || movie !== null) {
            this.editMovie = Object.assign(this.editMovie, movie); //clone the current movie for editing purpose       
        }
    };
    /**
     * saves the edited movie into the movies list
     * @param id: movie id
     */
    MoviesListComponent.prototype.save = function (id) {
        //check for title duplicity and empty fields
        if (this.editMovie.isValid()) {
            this.moviesList[this.getMovieIndex(id)] =
                Object.assign(new _movie_model__WEBPACK_IMPORTED_MODULE_2__["Movie"]('', '', '', '', '', ''), this.editMovie.sanitize());
            this.moviesService.updateMoviesList(this.moviesList);
        }
    };
    /**
     * deletes a movie form the list
     * @param id: movie ID
     */
    MoviesListComponent.prototype.deleteMovie = function (id) {
        var index = this.getMovieIndex(id);
        this.moviesList.splice(index, 1);
    };
    /**
   * gets the movie index of the movie list via movie id
   * @param id: movie id
   * @returns the index of the particular movie
   */
    MoviesListComponent.prototype.getMovieIndex = function (id) {
        return this.moviesList.findIndex(function (movie) {
            return id === movie.id;
        });
    };
    /**
     * set the value that toggels the delete option window
     */
    MoviesListComponent.prototype.toggleDeleteWindow = function () {
        this.showDeleteWindow = !this.showDeleteWindow;
    };
    MoviesListComponent.prototype.ngOnDestroy = function () {
        this.getNewMoviesSubscription.unsubscribe();
    };
    MoviesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.css */ "./src/app/movies-list/movies-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}()); //EOC



/***/ }),

/***/ "./src/app/numberValidator.validator.ts":
/*!**********************************************!*\
  !*** ./src/app/numberValidator.validator.ts ***!
  \**********************************************/
/*! exports provided: NumberValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberValidator", function() { return NumberValidator; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// validation function
function validateNumber() {
    return function (c) {
        if (isNaN(parseInt(c.value))) {
            return {
                numberValidator: {
                    valid: false
                }
            };
        }
        else {
            return null;
        }
    };
}
var NumberValidator = /** @class */ (function () {
    function NumberValidator() {
        this.validator = validateNumber();
    }
    NumberValidator_1 = NumberValidator;
    NumberValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    var NumberValidator_1;
    NumberValidator = NumberValidator_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[numberValidator][ngModel]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useExisting: NumberValidator_1, multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], NumberValidator);
    return NumberValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/vitka/projects/Angular_Projects/cinema-task/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map