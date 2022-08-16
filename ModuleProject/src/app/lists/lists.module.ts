import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ListsHomeComponent } from './lists-home/lists-home.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [
    ListsHomeComponent,
    StatisticsComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    SharedModule
  ],
  exports: [
    ListsHomeComponent
  ]
})
export class ListsModule { }
