import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'my-movie-detail',
  templateUrl: 'app/movie-detail.component.html',
  styleUrls: ['app/movie-detail.component.css'],
  inputs: ['movie']
})
export class MovieDetailComponent implements OnInit {
  public movie: any;

  constructor(private _movieService: MovieService, private _routeParams: RouteParams) { }

  ngOnInit(){
    if (!this.movie){
        let id = +this._routeParams.get('id');
        this._movieService.getMovie(id).then(function(muvee){ 
            this.movie = muvee;
            console.log("movie detail", muvee, this.movie) 
        });
    }
  }

  goBack(){
    window.history.back();
  }
}
