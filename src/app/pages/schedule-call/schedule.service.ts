import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private apiUrl = 'http://localhost:3000'; // Update this with your actual API URL

  constructor(private http: HttpClient) { }

  scheduleCall(name: string, email: string, scheduledTime: string, duration: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/schedule`, { name, email, scheduledTime, duration });
  }
}