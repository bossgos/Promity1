import {Component, OnInit} from '@angular/core';
import {People} from '../../shared/models/peoples';
import {Film, FilmViewModel} from '../../shared/models/films';
import {SwapiService} from '../../shared/services/swapi.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  public people: People;
  public peopleId: number;
  public films: any[] = [];
  public starships: any[] = [];
  public vehicles: any[] = [];
  public homeworld: any[] = [];
  public species: any[] = [];

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.peopleId = params['id'];
      this.getPeople(this.peopleId);
    });
  }

  public getPeople(id: number) {
    this.swapiService.getPeopleDetails(id)
      .subscribe(
        people => {
          this.people = people;
          this.people.films.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getFilmDetails(id).subscribe(
              film => {
                this.films.push({
                  id: id,
                  title: film.title,
                  episode_id: film.episode_id
                });
              });
          });

          this.people.starships.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getStarshipDetails(id).subscribe(
              starship => {
                this.starships.push({
                  id: id,
                  name: starship.name
                });
              });
          });

          this.people.vehicles.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getVehiclesDetails(id).subscribe(
              vehicle => {
                this.vehicles.push({
                  id: id,
                  name: vehicle.name
                });
              });
          });

          let home = this.people.homeworld.split('/');
          let home_id = parseInt(home[home.length - 2]);
          this.swapiService.getPlanetDetails(home_id).subscribe(
            planet => {
              this.homeworld.push({
                id: home_id,
                name: planet.name
              });
            });

          this.people.species.forEach(item => {
            let species = item.split('/');
            let species_id = parseInt(species[species.length - 2]);
            this.swapiService.getSpeciesDetails(species_id).subscribe(
              species => {
                this.species.push({
                  id: species_id,
                  name: species.name
                });
              });
          });

          console.log(this.films);
          console.log(this.starships);
          console.log(this.vehicles);
          console.log(this.homeworld);
          console.log(this.species);
          console.log(this.people);
        },
        error => {
          console.log(error);
        }
      );
  }

}
