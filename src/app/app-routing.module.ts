import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportComponent } from './report/report.component';
import { ValidationComponent } from './validation/validation.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ValidatorUrlComponent } from './validator-url/validator-url.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path:'', redirectTo:'/inicio',pathMatch:'full'},
  {path:'inicio',component:InicioComponent},
  {path:'login',component:LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'report', component: ReportComponent },
  { path: 'validation', component: ValidationComponent },
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'url', component:ValidatorUrlComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
