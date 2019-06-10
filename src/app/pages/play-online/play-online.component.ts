import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-play-online',
  templateUrl: './play-online.component.html',
  styleUrls: ['./play-online.component.scss']
})
export class PlayOnlineComponent {
  name: string;
  private url;
  token = '';
  baseUrl = 'https://anton.belstu.by/gamev5/';
  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);
    this.token = localStorage.getItem('token');
  }
}
