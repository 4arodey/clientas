import { Component } from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.scss']
})
export class NewsPreviewComponent {
  title: object = [
    'Предметы',
    'Лабиринт',
    'Карты',
    'Остров'
  ];
  text: object = [
    'В этой статье описано предназначение каждоо из предметов. Каждый из игровых предметов предназначен для...',
    'О трудностях прохождения лаберинта и всех тайнах подземного царства. Лаберинт, тунель или он имеет огомное количество загадок...',
    'Карты - помощьник, или элемент бессымсленный элемент дизайна игры. Из покон веков карты являлись одним из основных атрибутов мореплавателей...',
    'Как всё таки найти загадочный остров, и продолжить играть в игру. Морские просторы скрывают в себе огромное количество загадок, одной из которых...'
  ];
  imageSrc: object = [
    'https://res.cloudinary.com/dsocr550v/image/upload/w_250,c_scale/v1560154901/1_hxfzd4.jpg',
    'https://res.cloudinary.com/dsocr550v/image/upload/w_250,c_scale/v1560154901/2_thu4h9.jpg',
    'https://res.cloudinary.com/dsocr550v/image/upload/w_250,c_scale/v1560154901/3_fzvb9m.jpg',
    'https://res.cloudinary.com/dsocr550v/image/upload/w_250,c_scale/v1560154901/4_g4xjw4.jpg'
  ];
}
