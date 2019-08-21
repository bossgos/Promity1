import {Component, OnInit} from '@angular/core';
import {Film, FilmViewModel} from '../../shared/models/films';
import {SwapiService} from '../../shared/services/swapi.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  public films: Film[];
  public filmViewModel: FilmViewModel;
  public pageSize = 10;
  public pageIndex = 1;
  public totalFilms = 0;
  public paginate: any = {};
  public search = '';

  constructor(public swapiService: SwapiService) {
  }

  ngOnInit() {
    this.getFilmsViewModel(this.pageIndex);
  }

  public getFilmsViewModel(pageIndex: number) {
    this.swapiService.getFilmsViewModel(pageIndex, this.search)
      .subscribe(
        filmViewModel => {
          this.filmViewModel = filmViewModel;

          this.totalFilms = this.filmViewModel.count;
          this.films = this.filmViewModel.results;
          this.films.forEach(item => {
              let st = item.url.split('/');
              item.id = parseInt(st[st.length - 2]);
          });
          this.paginate = this.getPager(this.totalFilms, this.paginate.currentPage, this.pageSize);
        },
        error => {
          console.log(error);
        }
      );
  }

  public setPage(page: number) {
    this.getFilmsViewModel(page);
    document.querySelector('.mat-sidenav-content').scrollTop = 0;
    this.paginate = this.getPager(this.totalFilms, page, this.pageSize);
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
