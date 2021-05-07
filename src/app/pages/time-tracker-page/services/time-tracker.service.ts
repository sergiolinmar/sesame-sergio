import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeTrackerService {
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {
    this.headers = new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer 9a4c685e6fca0347ca0775119e9c47b6ba00e49096ba99ffcf6a41fe06e6f001'
   });
  }

  public get(page: number = 1): Observable<any> {
    return this.http.get(`api/work-entries?page=${page}`, { headers: this.headers });
  }

  public clockIn(employeeId: string): Observable<any> {
    const params = {
      'employeeId': employeeId,
      'workEntryIn': {
        'coordinates': {
        'latitude': null,
        'longitude': null
        }
      }
    };

    return this.http.post('api/work-entries/clock-in', params, { headers: this.headers });
  }

  public clockOut(employeeId: string): Observable<any> {
    const params = {
      'employeeId': employeeId,
      'workEntryIn': {
        'coordinates': {
        'latitude': null,
        'longitude': null
        }
      }
    };

    return this.http.post('api/work-entries/clock-out', params, { headers: this.headers });
  }
}
