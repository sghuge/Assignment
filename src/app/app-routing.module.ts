import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-registration/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './login-registration/registration.component';
// import { UsersComponent } from './dashboard/users/users.component';
// import { OrdersComponent } from './dashboard/orders/orders.component';
// import { UpdateMenuComponent } from './dashboard/update-menu/update-menu.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, children: [
  ]},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', redirectTo:'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export const routerComponent = [LoginComponent, DashboardComponent, RegistrationComponent];
