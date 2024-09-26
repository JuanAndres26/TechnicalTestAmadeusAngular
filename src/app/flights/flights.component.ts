import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../services/flights.service';
import { CommonModule } from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  standalone : true,
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css'],
  imports: [
    CommonModule,
    SidebarComponent  ]
  
})
export class FlightsComponent implements OnInit {
  flights: any[] = [];


  constructor(private flightsService: FlightsService) {}


  ngOnInit(): void {
    this.getFlights();
  }

  getFlights() {
    this.flightsService.getFlights().subscribe((data: any) => {
      this.flights = data;
      console.log(this.flights);
    });
  }

  reserveFlight(flightId: number) {
    this.flightsService.reserveFlight(flightId).subscribe({
      next: () => alert('Flight reserved successfully!'),
      error: () => alert('Failed to reserve flight')
    });
  }
}
