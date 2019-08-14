import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { People, PeopleViewModel } from '../models/peoples';
import { Film, FilmViewModel } from '../models/films';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/switchMap';

import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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

  getFilmShortDetails(id: number) {
    this.getFilmDetails(id).subscribe(sf => {
        this.sfilm = sf;
      });
    return this.sfilm.title;
  }

  getFilmName(id) {
    return this.sfilm.find(c => c.id === id);
  }

  /*  FILMS */


}
