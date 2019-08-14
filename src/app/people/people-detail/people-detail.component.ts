import { Component, OnInit } from '@angular/core';
import { People } from '../../shared/models/peoples';
import { SwapiService } from '../../shared/services/swapi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-people-detail',
    templateUrl: './people-detail.component.html',
    styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  public people: People;
  public peopleId: number;

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.peopleId = params["id"];
      this.getPeople(params["id"]);
    });
  }

  public getPeople(id: number) {
/*    this.swapiService.getPeople(id)
      .subscribe(
        people => {
            this.people = people;
        },
        error => {
          console.log(error);
        }
      );*/
  }

}
