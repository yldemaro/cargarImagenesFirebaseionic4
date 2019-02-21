import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InfoTrayectoPage } from './info-trayecto.page';

const routes: Routes = [
  {
    path: '',
    component: InfoTrayectoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [InfoTrayectoPage]
})
export class InfoTrayectoPageModule {}
