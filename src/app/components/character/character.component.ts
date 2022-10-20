import { Component, Input } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
})
export class CharacterComponent {
  @Input() info: Character = {
    id: 0,
    name: '',
    description: '',
    comics: {},
    modified: '',
    url: '',
    series: {},
    stories: {},
    image: '',
    urls: [],
  };

  constructor() {}
}
