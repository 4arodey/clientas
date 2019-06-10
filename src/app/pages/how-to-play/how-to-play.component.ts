import {Component, Input} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrls: ['./how-to-play.component.scss']
})
export class HowToPlayComponent {
  @Input() title: string;
  @Input() imageUrl: string;
  @Input() isBorder = true;

  name: string;
  baseUrl = 'https://anton.belstu.by/trenning/';
  url;
  constructor(private sanitizer: DomSanitizer) {
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);
  }
}
