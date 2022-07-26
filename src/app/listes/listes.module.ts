import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListesComponent } from './components/listes/listes.component';
import { ExportComponent } from './components/export/export.component';
import { ParametresComponent } from './components/parametres/parametres.component';
import { GestionComponent } from './components/gestion/gestion.component';
import { VoirComponent } from './components/voir/voir.component';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { NgToastModule } from  'ng-angular-popup';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';

import {MatSelectModule} from '@angular/material/select';
// import { NgForm } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ListesRoutingModule } from './listes-routing.module';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterComponent } from './components/ajouter/ajouter.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TraiterComponent } from './components/traiter/traiter.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ListesComponent,
    ExportComponent,
    ParametresComponent,
    GestionComponent,
    SidenavComponent,
    VoirComponent,
    AjouterComponent,
    TraiterComponent,
    ModalComponent,

  ],
  imports: [
    NgbPaginationModule, NgbAlertModule,
    CommonModule,
    ListesRoutingModule,
    FormsModule,
    NgxPaginationModule,
    MatCardModule,
    NgToastModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    HttpClientModule,

    ReactiveFormsModule,


        // NG Material Modules
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatToolbarModule
  ],

  exports: [
    FormsModule,





  ]
})
export class ListesModule { }
