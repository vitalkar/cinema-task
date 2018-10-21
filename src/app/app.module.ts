import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieAddBarComponent } from './movie-add-bar/movie-add-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { NumberValidator } from './numberValidator.validator';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieAddBarComponent,
    FooterComponent,
    MovieItemComponent,
    NumberValidator
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
