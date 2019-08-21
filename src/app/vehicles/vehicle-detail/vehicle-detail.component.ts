import {Component, OnInit} from '@angular/core';
import {Vehicle} from '../../shared/models/vehicles';
import {SwapiService} from '../../shared/services/swapi.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {
  public vehicle: Vehicle;
  public vehicleId: number;

  public pilots: any[] = [];
  public films: any[] = [];

  constructor(
    public swapiService: SwapiService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      this.getVehicle(this.vehicleId);
    });
  }

  public getVehicle(id: number) {
    this.swapiService.getVehiclesDetails(id)
      .subscribe(
        vehicle => {
          this.vehicle = vehicle;

          this.vehicle.pilots.forEach(item => {
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

          this.vehicle.films.forEach(item => {
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
