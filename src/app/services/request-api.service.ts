import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { changeStatusOfInterceptor } from '../interceptors/auth-token.interceptor';
import { CharacterDto } from '../models/character.model';
import { ComicDto } from '../models/comic.model';
import { SerieDto } from '../models/serie.model';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  urlApi: string = environment.URL_API;

  constructor(private http: HttpClient) {}

  composeUrl(url: string): string {
    return `${this.urlApi}${url}`;
  }

  getAllCharacters(): Observable<CharacterDto[] | any> {
    return this.http.get<CharacterDto[]>(
      this.composeUrl('v1/public/characters'),
      {
        context: changeStatusOfInterceptor(),
      }
    );
  }

  getAllComics(): Observable<ComicDto[] | any> {
    return this.http.get<ComicDto[]>(this.composeUrl('v1/public/comics'), {
      context: changeStatusOfInterceptor(),
    });
  }

  getAllSeries(): Observable<SerieDto[] | any> {
    return this.http.get<SerieDto[]>(this.composeUrl('v1/public/series'), {
      context: changeStatusOfInterceptor(),
    });
  }
}
