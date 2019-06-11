import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news1',
  templateUrl: './news1.component.html',
  styleUrls: ['./news1.component.scss']
})
export class News1Component {
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
}
