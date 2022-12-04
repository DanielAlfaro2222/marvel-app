import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';

const routes: Routes = [
  {
    path: 'index',
    component: AppComponent,
  },
  {
    path: 'detail-character',
    component: DetailCharacterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
