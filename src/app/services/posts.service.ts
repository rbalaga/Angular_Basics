import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from 'src/app/models/Posts.model';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  postsUrl: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts = (): Observable<Posts[]> => {
    console.log('fetching posts');
    return this.httpClient.get<Posts[]>(this.postsUrl);
  };

  addPost = (post: Posts): Observable<Posts> => {
    console.log('saving post');
    const url = 'http://jsonplaceholder.typicode.com/posts';
    return  this.httpClient.post<Posts>(url, post, httpOptions);
  }

  updatePost = (post: Posts): Observable<Posts> => {
    const url = `http://jsonplaceholder.typicode.com/posts/${post.id}`;
    return this.httpClient.put<Posts>(url, post, httpOptions);
  }

  deletePost = (postId: number): Observable<Posts> => {
    const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.httpClient.delete<Posts>(url, httpOptions);
  }

  getPost = (postId: number): Observable<Posts> => {
    const url = `http://jsonplaceholder.typicode.com/posts/${postId}`;
    return this.httpClient.get<Posts>(url);
  }
}
