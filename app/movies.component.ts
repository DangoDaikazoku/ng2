import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {MovieService} from './movie.service';
import {MovieDetailComponent} from './movie-detail.component';
import {Movie} from './movie';

@Component({
  selector: 'my-movies',
  templateUrl: 'app/movies.component.html',
  styleUrls: ['app/movies.component.css'],
  directives: [MovieDetailComponent]
})
export class MoviesComponent implements OnInit {

  public movies: Movie[];
  public selectedMovie: Movie;

  constructor(private _movieService: MovieService, private _router: Router) {}

  getMovies(){
    this._movieService.getMovies().then(movies => this.movies = movies);
  }

  gotoDetail(){
    this._router.navigate(['MovieDetail', { id: this.selectedMovie.id }]);
  }

  ngOnInit(){
    this.getMovies();
  }

  onSelect(movie: Movie) { this.selectedMovie = movie; }
}
