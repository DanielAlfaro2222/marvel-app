import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model';
import { RequestApiService } from './services/request-api.service';
import { SwiperOptions } from 'swiper';
import { mappingToCharacter, mappingToComic, mappingToSerie } from './helpers/mapper';
import { Comic } from './models/comic.model';
import { Serie } from './models/serie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Marvel App';
  characters: Character[] = [];
  comics: Comic[] = [];
  series: Serie[] = [];
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerGroup: 3,
    slidesPerView: 1,
    pagination: {},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    wrapperClass: 'container-swiper__wrapper',
    slidePrevClass: 'container-swiper__prev',
    slideNextClass: 'container-swiper__next',
    slideClass: 'container-swiper__item',
  };

  constructor(private requestApiService: RequestApiService) {}

  ngOnInit(): void {
    this.requestApiService.getAllCharacters().subscribe((res) => {
      this.characters = mappingToCharacter(res.data.results);
    });

    this.requestApiService.getAllComics().subscribe((res) => {
      this.comics = mappingToComic(res.data.results);
    });

    this.requestApiService.getAllSeries().subscribe(res => {
      this.series = mappingToSerie(res.data.results);
    })
  }
}
