import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'modal-page', loadChildren: './modal-page/modal-page.module#ModalPagePageModule' },
  { path: 'profile', loadChildren: './profile-page/profile-page.module#ProfilePagePageModule' },
  { path: '', loadChildren: './main/main.module#MainPageModule' },
  { path: 'edituser', loadChildren: './edit-user/edit-user.module#EditUserPageModule' },
  { path: 'create', loadChildren: './create/create.module#CreatePageModule' },
  { path: 'modal-tablon', loadChildren: './modal-tablon/modal-tablon.module#ModalTablonPageModule' },
  { path: 'info-trayecto/:id', loadChildren: './info-trayecto/info-trayecto.module#InfoTrayectoPageModule' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
