import { TraiterComponent } from './components/traiter/traiter.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListesComponent } from './components/listes/listes.component';
import { ExportComponent } from './components/export/export.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { VoirComponent } from './components/voir/voir.component';
import { AjouterComponent } from './components/ajouter/ajouter.component';

const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SidenavComponent,
    children: [
      {
        path: 'listes',
        component: ListesComponent
      },
      {
        path: 'export',
        component: ExportComponent
      },

      {
        path: 'gestion',
        component: GestionComponent
      },
      {
        path: 'parametres',
        component: ParametresComponent
      },
      {
        path: 'voir/:id',
        component: VoirComponent
      },
      {
        path: 'ajouter',
        component: AjouterComponent
      },
      {
        path: 'traiter/:id',
        component: TraiterComponent
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/listes',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesRoutingModule { }
