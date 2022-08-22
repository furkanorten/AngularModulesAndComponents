import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'lists', loadChildren: () =>
    import('./lists/lists.module').then(x => x.ListsModule)
  },
  {path:'placeholders', loadChildren: () =>
    import('./placeholders/placeholders.module').then(x => x.PlaceholdersModule)
  },
  {path:'popups', loadChildren: () =>
    import('./popups/popups.module').then(x => x.PopupsModule)
  },
  {path:'tables', loadChildren: () =>
    import('./tables/tables.module').then(x => x.TablesModule)
  },
  {path:'', component:HomeComponent},
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
