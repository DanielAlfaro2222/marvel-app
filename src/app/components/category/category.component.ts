import { Component, Input } from '@angular/core';
import { ConfigSwiperService } from 'src/app/services/config-swiper.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  config: SwiperOptions;

  constructor(private configSwiperOptions: ConfigSwiperService) {
    this.config = this.configSwiperOptions.config;
  }

  private titleToLowerCase(): string {
    return this.title.toLocaleLowerCase();
  }

  isEqualToTitle(word: string): boolean {
    return word === this.titleToLowerCase();
  }
}
