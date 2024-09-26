import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  userName: string | null = null; 

  constructor(private router: Router, private authService :AuthService) { 

    this.userName = this.authService.getusername();
  }
  logout() {
    
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  goReservation() {
    
    this.router.navigate(['/reservations']);
  }
  goFligth() {
    this.router.navigate(['/flights']);
  }
}
