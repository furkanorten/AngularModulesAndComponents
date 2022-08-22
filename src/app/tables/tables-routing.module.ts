import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { LanguagesComponent } from './languages/languages.component';
import { EducationComponent } from './education/education.component';
import { TablesHomeComponent } from './tables-home/tables-home.component';

const routes: Routes = [
  {path:'', component:TablesHomeComponent,
   children:[
    {path:'', component:CertificateComponent},
    {path:'languages', component:LanguagesComponent},
    {path:'education', component:EducationComponent}
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
