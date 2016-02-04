System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MovieService;
    function getXHR(url) {
        return new Promise(function (resolve, reject) {
            var req = new XMLHttpRequest();
            req.open('GET', url, true);
            req.onload = function () {
                if (req.status == 200) {
                    resolve(req.response);
                }
                else {
                    reject(Error(req.statusText));
                }
            };
            req.onerror = function () {
                reject(Error("Network Error"));
            };
            req.send();
        });
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MovieService = (function () {
                function MovieService() {
                    this.MovieVisUrl = "http://localhost:8000/movies/vis-data.json";
                    this.MoviesList = [];
                }
                MovieService.prototype.getMovies = function () {
                    if (this.MoviesList.length > 0) {
                        return Promise.resolve(this.MoviesList);
                    }
                    else if ("movieList" in localStorage) {
                        console.log("fetch from local");
                        return Promise.resolve(this.curated(localStorage["movieList"]));
                    }
                    else {
                        return getXHR(this.MovieVisUrl).then(function (response) {
                            console.log("fetch XHR");
                            localStorage["movieList"] = response;
                            return this.curated(response);
                        }.bind(this));
                    }
                };
                MovieService.prototype.curated = function (response) {
                    this.MoviesList = JSON.parse(response).results;
                    return this.MoviesList;
                };
                MovieService.prototype.getMovie = function (id) {
                    console.log("number service ", id, this.MoviesList.filter(function (movie) { return movie.id == id; })[0]);
                    return Promise.resolve(this.MoviesList.filter(function (movie) { return movie.id == id; })[0]);
                };
                MovieService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MovieService);
                return MovieService;
            })();
            exports_1("MovieService", MovieService);
        }
    }
});
//# sourceMappingURL=movie.service.js.map