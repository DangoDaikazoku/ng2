import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {MoviesComponent} from './movies.component';
import {MovieDetailComponent} from './movie-detail.component';
import {DashboardComponent} from './dashboard.component';
import {MovieService} from './movie.service';

@Component({
  selector: 'my-app',
  template: `

    <div class="navbar navbar-inverse">
      
      <ul class="nav navbar-nav">
      
        <li><a class="navbar-brand sprite" href="/"></a></li>
        <li><a class="homeicon sprite" [routerLink]="['Dashboard']"></a></li>
        <li><a href="/latest-movies.htm" class="dropdown-toggle disabled" data-toggle="dropdown" role="button" aria-expanded="false">MOVIES &amp; Reviews<span class="caret"></span><span class="triangle_arrow"></span></a></li>
        
        <li><a [routerLink]="['Movies']">Plain List Movies</a></li>

      </ul>

    </div>

    <router-outlet></router-outlet>

  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [MovieService]
})
@RouteConfig([
  // {path: '/', redirectTo: ['Dashboard'] },
  {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  {path: '/movies', name: 'Movies', component: MoviesComponent},
  {path: '/detail/:id', name: 'MovieDetail', component: MovieDetailComponent}
])
export class AppComponent {
  public title = 'Desimartini';
}
