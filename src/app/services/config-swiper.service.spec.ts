import { TestBed } from '@angular/core/testing';

import { ConfigSwiperService } from './config-swiper.service';

describe('ConfigSwiperService', () => {
  let service: ConfigSwiperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigSwiperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
