import { Component, Input } from '@angular/core';
import { Serie } from 'src/app/models/serie.model';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.scss']
})
export class SerieComponent {
  @Input() data: Serie = {
    characters: {},
    creators: {},
    comics: {},
    startYear: '',
    endYear: '',
    rating: '',
    description: '',
    id: '',
    series: {},
    stories: {},
    title: '',
    image: '',
    urls: [],
    type: '',
  }

  constructor() { }
}
