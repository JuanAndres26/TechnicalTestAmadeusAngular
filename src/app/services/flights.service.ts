import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private apiUrl = 'https://localhost:7237/api/Reservations';

  constructor(private http: HttpClient) {}

  getFlights(): Observable<any[]> {
    var token = localStorage.getItem('token')
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token,
    });
    return this.http.get<any[]>(`${this.apiUrl}/Flights`, {headers: headers});
  }

  reserveFlight(flightId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/Flight`, { flightId });
  }
}