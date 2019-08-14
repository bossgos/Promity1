import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PeopleListComponent} from './people/people-list/people-list.component';
import {PeopleDetailComponent} from './people/people-detail/people-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/peoples', pathMatch: 'full'},
  {path: 'peoples', component: PeopleListComponent},
  {path: 'people/:id', component: PeopleDetailComponent},
  {path: '**', component: PeopleListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
