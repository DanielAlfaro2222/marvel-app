import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CharacterComponent } from './components/character/character.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './components/loading/loading.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    LoadingComponent,
    DetailCharacterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
