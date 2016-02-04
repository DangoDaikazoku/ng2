System.register(['angular2/core', 'angular2/router', './movies.component', './movie-detail.component', './dashboard.component', './movie.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, movies_component_1, movie_detail_component_1, dashboard_component_1, movie_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (movies_component_1_1) {
                movies_component_1 = movies_component_1_1;
            },
            function (movie_detail_component_1_1) {
                movie_detail_component_1 = movie_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (movie_service_1_1) {
                movie_service_1 = movie_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Desimartini';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\n    <div class=\"navbar navbar-inverse\">\n      \n      <ul class=\"nav navbar-nav\">\n      \n        <li><a class=\"navbar-brand sprite\" href=\"/\"></a></li>\n        <li><a class=\"homeicon sprite\" [routerLink]=\"['Dashboard']\"></a></li>\n        <li><a href=\"/latest-movies.htm\" class=\"dropdown-toggle disabled\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\">MOVIES &amp; Reviews<span class=\"caret\"></span><span class=\"triangle_arrow\"></span></a></li>\n        \n        <li><a [routerLink]=\"['Movies']\">Plain List Movies</a></li>\n\n      </ul>\n\n    </div>\n\n    <router-outlet></router-outlet>\n\n  ",
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [movie_service_1.MovieService]
                    }),
                    router_1.RouteConfig([
                        // {path: '/', redirectTo: ['Dashboard'] },
                        { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
                        { path: '/movies', name: 'Movies', component: movies_component_1.MoviesComponent },
                        { path: '/detail/:id', name: 'MovieDetail', component: movie_detail_component_1.MovieDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map