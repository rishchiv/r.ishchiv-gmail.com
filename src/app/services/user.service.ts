import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../constants';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private SERVICE_URL = `${API_URL}/users`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<IUser[]>(this.SERVICE_URL);
  }

  getUserById(id: string) {
    return this.http.get<IUser>(`${this.SERVICE_URL}/${id}`);
  }
}
