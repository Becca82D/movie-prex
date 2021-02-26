import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardsAnimPageRoutingModule } from './cardsAnim-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CardsAnimPage } from './cardsAnim.page';
import { InputModule } from '../components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IonicModule,
    InputModule,
    RouterModule.forChild([{ path: '', component: CardsAnimPage }]),

    CardsAnimPageRoutingModule,
  ],
  declarations: [CardsAnimPage],
})
export class CardsAnimPageModule {}
