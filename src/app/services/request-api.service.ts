import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class RequestApiService {
  urlApi: string = environment.URL_API;
  keyApi: string = environment.API_KEY;
  hash: string = environment.HASH;

  constructor(private http: HttpClient) {}

  composeUrl(url: string): string {
    return `${this.urlApi}${url}`;
  }

  getAllCharacters(): Observable<any> {
    let params: HttpParams = new HttpParams();

    params = params.set('ts', 1);
    params = params.set('apikey', this.keyApi);
    params = params.set('hash', this.hash);

    return this.http.get<any>(this.composeUrl('v1/public/characters'), {
      params,
    });
  }
}
