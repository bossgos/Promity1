import { NgModule, Compiler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Services
import { SwapiService } from '../shared/services/swapi.service';

// Components

@NgModule({
  exports: [
    CommonModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ],
  declarations: [
  ],
  providers: [
    SwapiService,
  ]
})
export class SharedModule {}
