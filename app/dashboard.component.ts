import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Movie} from './movie';
import {MovieService} from './movie.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public movies: Movie[] = [];
  public listType : String;

  constructor(private _movieService: MovieService, private _router: Router) { 
    this.listType = "latest";
  }

  ngOnInit() {
    this._movieService.getMovies().then(movies => this.movies = movies.slice(1,100));
  }

  gotoDetail(movie: Movie) {
    this._router.navigate(['MovieDetail', { id: movie.id }]);
  }
}
