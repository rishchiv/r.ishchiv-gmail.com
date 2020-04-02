import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URL } from '../../constants';
import { IPost } from 'src/app/interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private SERVICE_URL = `${API_URL}/posts`;

  constructor(private http: HttpClient) { }

  public getPosts() {
    return this.http.get<IPost[]>(this.SERVICE_URL);
  }

  public createPost(post: IPost) {
    return this.http.post(this.SERVICE_URL, post);
  }
}
