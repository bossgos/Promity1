import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { People, PeopleViewModel } from '../models/peoples';
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

  constructor(
    private http: HttpClient
  ) {}


  getPeoplesByPage(page: number): Observable<People[]> {
    return this.http.get<People[]>(this.swapiUrl + 'people/?page=' + page)
      .map(data => {
        console.log(data);
        return data['results'];
      });
  }

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

}
