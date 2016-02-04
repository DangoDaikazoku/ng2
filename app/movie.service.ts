import {Injectable} from 'angular2/core';
import {HEROES} from './mock-movies';

@Injectable()
export class MovieService {

	private MovieVisUrl:String = "http://localhost:8000/movies/vis-data.json";
	private MoviesList:any[] = [];

	getMovies(){
		if( this.MoviesList.length > 0){
			return Promise.resolve(this.MoviesList);
		}
		else if( "movieList" in localStorage ){
			console.log("fetch from local");
			return Promise.resolve(this.curated(localStorage["movieList"]));
		}
		else{
			return getXHR(this.MovieVisUrl).then(function(response){
				console.log("fetch XHR");
				localStorage["movieList"] = response;
				return this.curated(response);
			}.bind(this))
		}
	}

	curated(response){
		this.MoviesList = JSON.parse(response).results;
		return this.MoviesList
	}

	getMovie(id: number) {
		console.log("number service ", id, this.MoviesList.filter(movie => movie.id == id)[0]);
    	return Promise.resolve(this.MoviesList.filter(movie => movie.id == id)[0])
	}

}


function getXHR(url) {
  return new Promise(function(resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', url, true);

    req.onload = function() {
      if (req.status == 200) {
        resolve(req.response);
      }
      else {
        reject(Error(req.statusText));
      }
    };

    req.onerror = function() {
      reject(Error("Network Error"));
    };

    req.send();
  });
}