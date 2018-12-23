import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards';
import { TrailComponent } from './main/trail/trail.component';
import { Trail1Component } from './main/trail1/trail1.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {animation: 'FilterPage'}
},
{
    path: 'login',
    component: LoginComponent,
},
{
  path: 'trail',
  component: TrailComponent,
  data: {animation: 'HomePage'}
},
{
  path: 'trail1',
  component: Trail1Component,
  data: {animation: 'FilterPage'}
},
// otherwise redirect to home
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
