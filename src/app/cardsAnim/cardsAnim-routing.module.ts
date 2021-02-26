import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardsAnimPage } from './cardsAnim.page';

const routes: Routes = [
  {
    path: '',
    component: CardsAnimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardsAnimPageRoutingModule {}
