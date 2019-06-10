import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reclama',
  templateUrl: './reclama.component.html',
  styleUrls: ['./reclama.component.scss']
})
export class ReclamaComponent {

  name: string;
  private url;
  token = '';
  constructor() {
    this.token = localStorage.getItem('token');
  }
}
