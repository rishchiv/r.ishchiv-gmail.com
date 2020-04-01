import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SERVICE_URL = `${API_URL}/users`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<{}> {
    return this.http.get(this.SERVICE_URL);
  }

  getUserById(id: number): Observable<{}> {
    return this.http.get(`this.SERVICE_URL/${id}`);
  }
}
