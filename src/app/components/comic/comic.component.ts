import { Component, Input } from '@angular/core';
import { Comic } from 'src/app/models/comic.model';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
})
export class ComicComponent {
  @Input() data: Comic = {
    characters: {},
    creators: {},
    dates: [],
    description: '',
    digitalId: '',
    id: '',
    isbn: '',
    issn: '',
    series: {},
    stories: {},
    title: '',
    image: '',
    urls: [],
    variants: [],
  };

  constructor() {}
}
