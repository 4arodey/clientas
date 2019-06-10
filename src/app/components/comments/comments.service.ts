import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private socket = io('http://localhost:3012');
  private commentUrl = 'http://localhost:3012/api/v1/comments';

  constructor(private http: HttpClient) {}

  getComments(id: number): Observable<any> {
    return this.http.get(`${this.commentUrl}/${id}`);
  }

  createComment(data) {
    this.socket.emit('comment', data);
  }

  newCommentReceived() {
    const observable = new Observable<any>(observer => {
      this.socket.on('comment', (data) => {
        observer.next(data);
      });
      return () => { this.socket.disconnect(); };
    });

    return observable;
  }
}
