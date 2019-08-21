import {Component, OnInit} from '@angular/core';
import {Film} from '../../shared/models/films';
import {SwapiService} from '../../shared/services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  public film: Film;
  public filmId: number;


  public characters: any[] = [];
  public starships: any[] = [];
  public vehicles: any[] = [];
  public species: any[] = [];
  public planets: any[] = [];

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.filmId = params['id'];
      this.getFilm(this.filmId);
    });
  }

  public getFilm(id: number) {
    this.swapiService.getFilmDetails(id)
      .subscribe(
        film => {
          this.film = film;

          this.film.characters.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getPeopleDetails(id).subscribe(
              character => {
                this.characters.push({
                  id: id,
                  name: character.name
                });
              });
          });

          this.film.starships.forEach(item => {
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

          this.film.vehicles.forEach(item => {
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

          this.film.species.forEach(item => {
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

          this.film.planets.forEach(item => {
            let planets = item.split('/');
            let planets_id = parseInt(planets[planets.length - 2]);
            this.swapiService.getPlanetDetails(planets_id).subscribe(
              planets => {
                this.planets.push({
                  id: planets_id,
                  name: planets.name
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
