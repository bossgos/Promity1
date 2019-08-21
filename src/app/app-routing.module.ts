import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PeopleListComponent} from './people/people-list/people-list.component';
import {PeopleDetailComponent} from './people/people-detail/people-detail.component';
import {FilmListComponent} from './films/film-list/film-list.component';
import {FilmDetailComponent} from './films/film-detail/film-detail.component';
import {StarshipListComponent} from './starships/starship-list/starship-list.component';
import {StarshipDetailComponent} from './starships/starship-detail/starship-detail.component';
import {VehicleListComponent} from './vehicles/vehicle-list/vehicle-list.component';
import {VehicleDetailComponent} from './vehicles/vehicle-detail/vehicle-detail.component';
import {PlanetListComponent} from './planets/planet-list/planet-list.component';
import {PlanetDetailComponent} from './planets/planet-detail/planet-detail.component';
import {SpeciesListComponent} from './species/species-list/species-list.component';
import {SpeciesDetailComponent} from './species/species-detail/species-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: 'characters-list', component: PeopleListComponent},
  {path: 'character/:id', component: PeopleDetailComponent},
  {path: 'films-list', component: FilmListComponent},
  {path: 'film/:id', component: FilmDetailComponent},
  {path: 'starships-list', component: StarshipListComponent},
  {path: 'starship/:id', component: StarshipDetailComponent},
  {path: 'vehicles-list', component: VehicleListComponent},
  {path: 'vehicle/:id', component: VehicleDetailComponent},
  {path: 'planets-list', component: PlanetListComponent},
  {path: 'planet/:id', component: PlanetDetailComponent},
  {path: 'species-list', component: SpeciesListComponent},
  {path: 'species/:id', component: SpeciesDetailComponent},
  {path: '**', component: PeopleListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
