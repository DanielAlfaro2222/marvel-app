import { Component, OnInit } from '@angular/core';
import { Character } from './models/character.model';
import { RequestApiService } from './services/request-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Marvel App';
  characters: Character[] = [];

  constructor(private requestApiService: RequestApiService) {}

  ngOnInit(): void {
    this.requestApiService.getAllCharacters().subscribe((res) => {
      this.characters = res.data.results;
      console.log(res);
    });
  }
}
