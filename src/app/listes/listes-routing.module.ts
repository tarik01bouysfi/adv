import { LoginComponent } from './components/login/login.component';
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
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'error404',
    component: ErrorPageComponent,
  },
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
    redirectTo: '/error404',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListesRoutingModule { }
