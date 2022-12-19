import { Component } from '@angular/core';
import {
  mappingToCharacter,
  mappingToComic,
  mappingToSerie,
} from '../../helpers/mapper';
import { Category } from '../../models/category.model';
import { RequestApiService } from '../../services/request-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string = 'Marvel App';
  categories: Category[] = [];

  constructor(private requestApiService: RequestApiService) {}

  ngOnInit(): void {
    this.getCharacters();
    this.getComics();
    this.getSeries();
  }

  getCharacters(): void {
    this.requestApiService.getAllCharacters().subscribe({
      next: (res) => {
        this.categories.push({
          title: 'Personajes',
          data: mappingToCharacter(res.data.results),
        });
      },
    });
  }

  getComics(): void {
    this.requestApiService.getAllComics().subscribe({
      next: (res) => {
        this.categories.push({
          title: 'Comics',
          data: mappingToComic(res.data.results),
        });
      },
    });
  }

  getSeries(): void {
    this.requestApiService.getAllSeries().subscribe({
      next: (res) => {
        this.categories.push({
          title: 'Series',
          data: mappingToSerie(res.data.results),
        });
      },
    });
  }
}
