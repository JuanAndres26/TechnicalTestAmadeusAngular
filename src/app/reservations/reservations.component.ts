import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../services/reservations.service';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  standalone : true,
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css'],
  imports: [
    CommonModule,
    SidebarComponent  
  ]
})
export class ReservationsComponent implements OnInit {
  reservations: any[] = [];

  constructor(private reservationsService: ReservationsService) {}

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations() {
    this.reservationsService.getReservations().subscribe((data: any) => {
      this.reservations = data;
      console.log(this.reservations)
    });
  }

  reserveFlight(flightId: number): void {
    this.reservationsService.reserveFlight(flightId).subscribe(
      (response) => {
        console.log('Flight reserved', response);
        // Aquí podrías actualizar la lista de reservas o mostrar un mensaje de éxito
        this.getReservations(); // Actualizar la lista de reservas
      },
      (error) => {
        console.error('Error reserving flight', error);
      }
    );
  }

  editReservation(reservation: any) {
    // Lógica para editar la reserva (puedes abrir un modal o redirigir a otra página)
  }

  deleteReservation(reservationId: number) {
    this.reservationsService.deleteReservation(reservationId).subscribe({
      next: () => this.getReservations(),
      error: () => alert('Failed to delete reservation')
    });
  }
}
