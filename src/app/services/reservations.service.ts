import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { stringify } from 'querystring';


@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private apiUrl = 'https://localhost:7237/api/reservations'; // Cambia a tu backend

  constructor(private http: HttpClient) {}

  getReservations(): Observable<any[]> {
    var token = localStorage.getItem('token')
    if (token) {
      const decoded: any = jwtDecode(token); 
      var id = decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"]
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });
    return this.http.get<any[]>(`${this.apiUrl}/${id}`, {headers: headers});
      console.log(decoded);
    } else {
      return this.http.get<any[]>(`${this.apiUrl}/`);
    }
    // Asegúrate de que esto funcione
    
  }

  deleteReservation(reservationId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${reservationId}`);
  }

  editReservation(reservationId: number, updatedReservation: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${reservationId}`, updatedReservation);
  }

  reserveFlight(flightId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Flight`, { flightId });
  }
}


