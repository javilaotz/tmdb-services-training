import { Component, OnInit } from '@angular/core';
import { MovieService } from './app.movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  baseUrl = "http://image.tmdb.org/t/p/w300/";
  title = 'app works!';
  movies=[];
 

  constructor(private movieService:MovieService){}//necesito esta dependencia de este servicio de forma privada

  ngOnInit(){
    this.movies = this.movieService.get();
  }

  getUrl(src: string): string {
    return `${this.baseUrl}${src}`;
  }

}
