import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  public comments  = [];
  comment: string;
  error: any = {};
  newsId: number;
  private token: string;
  private lastname: string;
  private id: string;

  constructor( private commentsService: CommentsService) {
    this.token = localStorage.getItem('token');
    const jwt = this.token && jwt_decode(this.token.slice(4));
    this.lastname = jwt && jwt.lastname;
    this.id = jwt && jwt.id;
    console.log(this.lastname);
    this.newsId = +window.location.href.match(/news\/([0-9]*)/)[1];
    this.commentsService.getComments(this.newsId).subscribe(
      data => {
        console.log(data.data);
        data.data.forEach((comment, index) => {
          this.comments.push({
            id: comment.id,
            text: comment.text,
            user_id: comment.user_id,
            date: new Date(comment.date),
          });
        });
        console.log(this.comments);
      },
      error => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.commentsService.newCommentReceived().subscribe(
      data => {
        this.comments.push({...data, date: new Date(data.date)});
      }
    );

  }
  onComment() {
    setTimeout(() => {
      this.commentsService.createComment({
        id: this.lastname ,
        text: this.comment,
        user_id: this.id,
        news_id: this.newsId,
        status: 200,
        date: new Date().toISOString()
      });
      this.comment = '';
    }, 100);
  }

}
