import { Component } from '@angular/core';
import jwt_decode from 'jwt-decode';
import {CommentsService} from '../comments/comments.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  private token: string;
  public lastname: string;
  private firstname: string;
  private id: string;
  private email: string;


  constructor( private commentsService: CommentsService) {
    this.token = localStorage.getItem('token');
    const jwt = this.token && jwt_decode(this.token.slice(4));
    this.lastname = jwt && jwt.lastname;
    this.firstname = jwt && jwt.firstname;
    this.id = jwt && jwt.id;
    this.email = jwt && jwt.email;
    console.log(this.firstname);
  }
}
