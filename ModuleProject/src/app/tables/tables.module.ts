import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesHomeComponent } from './tables-home/tables-home.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';
import { TabsComponent } from './tabs/tabs.component';


@NgModule({
  declarations: [
    TablesHomeComponent,
    TableComponent,
    CertificateComponent,
    LanguagesComponent,
    EducationComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    SharedModule
  ],
  exports: [
    TablesHomeComponent
  ]
})
export class TablesModule { }
