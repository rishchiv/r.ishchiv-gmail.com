import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SERVICE_URL = `${API_URL}/users`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.SERVICE_URL);
  }

  getUserById(id: number) {
    return this.http.get(`${this.SERVICE_URL}/${id}`);
  }
}
