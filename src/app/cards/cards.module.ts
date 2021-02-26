import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardsPageRoutingModule } from './cards-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CardsPage } from './cards.page';
import { InputModule } from '../components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IonicModule,
    InputModule,
    RouterModule.forChild([{ path: '', component: CardsPage }]),

    CardsPageRoutingModule,
  ],
  declarations: [CardsPage],
})
export class CardsPageModule {}
