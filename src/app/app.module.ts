import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {MainNavComponent} from './shared/main-nav/main-nav.component';
import {SharedModule} from './shared/shared.module';

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


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PeopleListComponent,
    PeopleDetailComponent,
    FilmListComponent,
    FilmDetailComponent,
    StarshipListComponent,
    StarshipDetailComponent,
    VehicleListComponent,
    VehicleDetailComponent,
    PlanetListComponent,
    PlanetDetailComponent,
    SpeciesListComponent,
    SpeciesDetailComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
