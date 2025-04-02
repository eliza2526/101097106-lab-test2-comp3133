import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mission } from '../models/mission.model';

@Injectable({
  providedIn: 'root'
})
export class SpacexService {
  private apiUrl = 'https://api.spacexdata.com/v3/launches'

  constructor(private http: HttpClient) { }

  getLaunches(): Observable<Mission[]> {
    return this.http.get<any[]>(this.apiUrl)
  }
}
