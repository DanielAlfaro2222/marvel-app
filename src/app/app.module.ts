import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { CharacterComponent } from './components/character/character.component';
import { ComicComponent } from './components/comic/comic.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MenuComponent } from './components/menu/menu.component';
import { SerieComponent } from './components/serie/serie.component';
import { AuthTokenInterceptor } from './interceptors/auth-token.interceptor';
import { DetailCategoryComponent } from './pages/detail-category/detail-category.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    CharacterComponent,
    LoadingComponent,
    DetailCharacterComponent,
    ComicComponent,
    SerieComponent,
    HomeComponent,
    CategoryComponent,
    DetailCategoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, SwiperModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthTokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
