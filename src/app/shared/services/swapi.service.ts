import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*  MODELS */
import { People, PeopleViewModel } from '../models/peoples';
import { Film, FilmViewModel } from '../models/films';
import { Starship, StarshipsViewModel } from '../models/starships';
import { Vehicle, VehiclesViewModel } from '../models/vehicles';
import { Species, SpeciesViewModel } from '../models/species';
import { Planet, PlanetsViewModel } from '../models/planets';


@Injectable()
export class SwapiService {
  url = 'https://swapi.co/api/people/';
  swapiUrl = 'https://swapi.co/api/';
  sfilm: any;

  constructor(
    private http: HttpClient
  ) {}


/*  CHARACTERS */

  getPeoplesViewModel(page: number, search: string): Observable<PeopleViewModel> {
    if (search === '') {
    return this.http.get<PeopleViewModel>(this.swapiUrl + 'people/?page=' + page)
      .map(data => {
        return data;
      });
    } else {
      return this.http.get<PeopleViewModel>(this.swapiUrl + 'people/?page=' + page + '&search=' + search)
        .map(data => {
          return data;
        });
    }
  }

  getPeopleDetails(id: number): Observable<People> {
      return this.http.get<People>(this.swapiUrl + 'people/' + id)
        .map(data => {
          return data;
        });
  }

  /*  CHARACTERS */

  /*  FILMS */
  getFilmsViewModel(page: number, search: string): Observable<FilmViewModel> {
    if (search === '') {
      return this.http.get<FilmViewModel>(this.swapiUrl + 'films/?page=' + page)
        .map(data => {
          return data;
        });
    } else {
      return this.http.get<FilmViewModel>(this.swapiUrl + 'films/?page=' + page + '&search=' + search)
        .map(data => {
          return data;
        });
    }
  }

  getFilmDetails(id: number): Observable<Film> {
    return this.http.get<Film>(this.swapiUrl + 'films/' + id)
      .map(data => {
        return data;
      });
  }

  /*  FILMS */

  /*  STARSHIPS */
  getStarshipsViewModel(page: number, search: string): Observable<StarshipsViewModel> {
    if (search === '') {
      return this.http.get<StarshipsViewModel>(this.swapiUrl + 'starships/?page=' + page)
        .map(data => {
          return data;
        });
    } else {
      return this.http.get<StarshipsViewModel>(this.swapiUrl + 'starships/?page=' + page + '&search=' + search)
        .map(data => {
          return data;
        });
    }
  }

  getStarshipDetails(id: number): Observable<Starship> {
    return this.http.get<Starship>(this.swapiUrl + 'starships/' + id)
      .map(data => {
        return data;
      });
  }

  /* STARSHIPS */

  /*  VEHICLES */
  getVehiclesViewModel(page: number, search: string): Observable<VehiclesViewModel> {
    if (search === '') {
      return this.http.get<VehiclesViewModel>(this.swapiUrl + 'vehicles/?page=' + page)
        .map(data => {
          return data;
        });
    } else {
      return this.http.get<VehiclesViewModel>(this.swapiUrl + 'vehicles/?page=' + page + '&search=' + search)
        .map(data => {
          return data;
        });
    }
  }

  getVehiclesDetails(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(this.swapiUrl + 'vehicles/' + id)
      .map(data => {
        return data;
      });
  }

  /*  VEHICLES */

  /*  SPECIES */
  getSpeciesViewModel(page: number, search: string): Observable<SpeciesViewModel> {
    if (search === '') {
      return this.http.get<SpeciesViewModel>(this.swapiUrl + 'species/?page=' + page)
        .map(data => {
          return data;
        });
    } else {
      return this.http.get<SpeciesViewModel>(this.swapiUrl + 'species/?page=' + page + '&search=' + search)
        .map(data => {
          return data;
        });
    }
  }

  getSpeciesDetails(id: number): Observable<Species> {
    return this.http.get<Species>(this.swapiUrl + 'species/' + id)
      .map(data => {
        return data;
      });
  }

  /*  SPECIES */

  /*  PLANETS */
  getPlanetsViewModel(page: number, search: string): Observable<PlanetsViewModel> {
    if (search === '') {
      return this.http.get<PlanetsViewModel>(this.swapiUrl + 'planets/?page=' + page)
        .map(data => {
          return data;
        });
    } else {
      return this.http.get<PlanetsViewModel>(this.swapiUrl + 'planets/?page=' + page + '&search=' + search)
        .map(data => {
          return data;
        });
    }
  }

  getPlanetDetails(id: number): Observable<Planet> {
    return this.http.get<Planet>(this.swapiUrl + 'planets/' + id)
      .map(data => {
        return data;
      });
  }

  /*  PLANETS */

}
