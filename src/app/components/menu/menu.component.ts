import {Component} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public token = localStorage.getItem('token');

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    setInterval(() => {
      this.token = localStorage.getItem('token');
    }, 500);
    console.log(event);
    window.addEventListener('scroll', (event) => {
      console.log(event);
      if (document.documentElement.scrollTop > 400) {
        document.getElementById('content').style.position = 'fixed';
        document.getElementById('content').style.background = '#333333';
        document.getElementById('content').style.animation = 'menu 0.5s';

      } else {
        document.getElementById('content').style.position = 'absolute';
        document.getElementById('content').style.animation = '';
      }
    })
  }

  public logOut(key) {
    this.authService.deleteToken(key);
    this.router.navigate(['/login']);
  }

  public scroll(event: any) {
    console.log(event);
  }
}
