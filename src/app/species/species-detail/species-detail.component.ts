import {Component, OnInit} from '@angular/core';
import {Species} from '../../shared/models/species';
import {SwapiService} from '../../shared/services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-species-detail',
  templateUrl: './species-detail.component.html',
  styleUrls: ['./species-detail.component.css']
})
export class SpeciesDetailComponent implements OnInit {
  public species: Species;
  public speciesId: number;

  public peoples: any[] = [];
  public films: any[] = [];
  public homeworld: any[] = [];

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.speciesId = params['id'];
      this.getSpecies(this.speciesId);
    });
  }

  public getSpecies(id: number) {
    this.swapiService.getSpeciesDetails(id)
      .subscribe(
        species => {
          this.species = species;

          this.species.people.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getPeopleDetails(id).subscribe(
              people => {
                this.peoples.push({
                  id: id,
                  name: people.name
                });
              });
          });

          this.species.films.forEach(item => {
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

          let home = this.species.homeworld.split('/');
          let home_id = parseInt(home[home.length - 2]);
          this.swapiService.getPlanetDetails(home_id).subscribe(
            planet => {
              this.homeworld.push({
                id: home_id,
                name: planet.name
              });
            });

        },
        error => {
          console.log(error);
        }
      );
  }

}
