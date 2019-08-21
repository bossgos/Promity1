import {Component, OnInit} from '@angular/core';
import {Vehicle, VehiclesViewModel} from '../../shared/models/vehicles';
import {SwapiService} from '../../shared/services/swapi.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  public vehicles: Vehicle[];
  public vehiclesViewModel: VehiclesViewModel;
  public totalVehicles = 0;
  public pageSize = 10;
  public pageIndex = 1;
  public paginate: any = {};
  public search = '';

  constructor(public swapiService: SwapiService) {
  }

  ngOnInit() {
    this.getVehiclesViewModel(this.pageIndex);
  }

  public getVehiclesViewModel(pageIndex: number) {
    this.swapiService.getVehiclesViewModel(pageIndex, this.search)
      .subscribe(
        vehiclesViewModel => {
          this.vehiclesViewModel = vehiclesViewModel;
          this.totalVehicles = this.vehiclesViewModel.count;
          this.vehicles = this.vehiclesViewModel.results;
          this.vehicles.forEach(item => {
              let st = item.url.split('/');
              item.id = parseInt(st[st.length - 2]);
          });
          this.paginate = this.getPager(this.totalVehicles, this.paginate.currentPage, this.pageSize);
        },
        error => {
          console.log(error);
        }
      );
  }

  public setPage(page: number) {
    this.getVehiclesViewModel(page);
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
    this.paginate = this.getPager(this.totalVehicles, page, this.pageSize);
  }

  getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
    const totalPages = Math.ceil(totalItems / pageSize);
    if (currentPage < 1) {
      currentPage = 1;
    } else if (currentPage > totalPages) {
      currentPage = totalPages;
    }
    let startPage: number, endPage: number;
    if (totalPages <= 3) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 2) {
        startPage = 1;
        endPage = 3;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 2;
        endPage = totalPages;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    }
    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    let pages = Array.from(Array((endPage + 1) - startPage).keys()).map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

}
