import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCategoryComponent } from './pages/detail-category/detail-category.component';
import { DetailCharacterComponent } from './pages/detail-character/detail-character.component';

const routes: Routes = [
  {
    path: 'character',
    component: DetailCharacterComponent,
  },
  {
    path: 'category',
    component: DetailCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
