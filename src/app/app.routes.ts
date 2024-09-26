import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FlightsComponent } from './flights/flights.component';
import { ReservationsComponent } from './reservations/reservations.component';


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'flights', component: FlightsComponent}, 
  { path: 'reservations', component: ReservationsComponent}, 
  { path: '', redirectTo: '/flights', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
  { path: '', redirectTo:'login', pathMatch:'full'}
];