import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { API_URL } from '../../constants';

@Injectable()
export class PostsService {

  private SERVICE_URL = `${API_URL}/posts`;

  constructor(private http: HttpClient) { }

  public getPosts(): Observable<{}> {
    return this.http.get(this.SERVICE_URL);
  }

  public createPost(post: {}): Observable<{}> {
    return this.http.post(this.SERVICE_URL, post);
  }
}
