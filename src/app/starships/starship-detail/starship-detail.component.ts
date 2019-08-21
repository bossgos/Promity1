import {Component, OnInit} from '@angular/core';
import {Starship} from '../../shared/models/starships';
import {SwapiService} from '../../shared/services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  public starship: Starship;
  public starshipId: number;

  public pilots: any[] = [];
  public films: any[] = [];

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.starshipId = params['id'];
      this.getStarship(this.starshipId);
    });
  }

  public getStarship(id: number) {
    this.swapiService.getStarshipDetails(id)
      .subscribe(
        starship => {
          this.starship = starship;

          this.starship.pilots.forEach(item => {
            let st = item.split('/');
            let id = parseInt(st[st.length - 2]);
            this.swapiService.getPeopleDetails(id).subscribe(
              pilot => {
                this.pilots.push({
                  id: id,
                  name: pilot.name
                });
              });
          });

          this.starship.films.forEach(item => {
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
