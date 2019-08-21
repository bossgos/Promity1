import {Component, OnInit} from '@angular/core';
import {Planet} from '../../shared/models/planets';
import {SwapiService} from '../../shared/services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.css']
})
export class PlanetDetailComponent implements OnInit {
  public planet: Planet;
  public planetId: number;

  public residents: any[] = [];
  public films: any[] = [];

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.planetId = params['id'];
      this.getPlanet(this.planetId);
    });
  }

  public getPlanet(id: number) {
    this.swapiService.getPlanetDetails(id)
      .subscribe(
        planet => {
          this.planet = planet;

          this.planet.residents.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getPeopleDetails(id).subscribe(
              resident => {
                this.residents.push({
                  id: id,
                  name: resident.name
                });
              });
          });

          this.planet.films.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getFilmDetails(id).subscribe(
              film => {
                this.films.push({
                  id: id,
                  title: film.title
                });
              });
          });

        },
        error => {
          console.log(error);
        }
      );
  }

}
