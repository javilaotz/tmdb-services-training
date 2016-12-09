import {Injectable} from  "@angular/core";
import {moviesList} from "./app.moviesStore";

@Injectable() //Esta linea va sin punto y coma

export class MovieService{
    
    get(): any{
        return moviesList.results
    }

}