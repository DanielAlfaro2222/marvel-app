import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterDto } from '../models/character.model';
import { ComicDto } from '../models/comic.model';
import { SerieDto } from '../models/serie.model';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  urlApi: string = environment.URL_API;
  keyApi: string = environment.API_KEY;
  hash: string = environment.HASH;
  params: HttpParams = this.createHttpParams();

  constructor(private http: HttpClient) {}

  composeUrl(url: string): string {
    return `${this.urlApi}${url}`;
  }

  createHttpParams(): HttpParams {
    let params: HttpParams = new HttpParams();

    params = params.set('ts', 1);
    params = params.set('apikey', this.keyApi);
    params = params.set('hash', this.hash);

    return params;
  }

  getAllCharacters(
    params: HttpParams = this.params
  ): Observable<CharacterDto[] | any> {
    return this.http.get<CharacterDto[]>(
      this.composeUrl('v1/public/characters'),
      {
        params,
      }
    );
  }

  getAllComics(params: HttpParams = this.params): Observable<ComicDto[] | any> {
    return this.http.get<ComicDto[]>(this.composeUrl('v1/public/comics'), {
      params,
    });
  }

  getAllSeries(params: HttpParams = this.params): Observable<SerieDto[] | any> {
    return this.http.get<SerieDto[]>(this.composeUrl('v1/public/series'), { params });
  }
}
