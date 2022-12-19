import { Injectable } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Injectable({
  providedIn: 'root',
})
export class ConfigSwiperService {
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

  constructor() {}
}
