import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SignupPageRoutingModule } from './signup-routing.module';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SignupPage } from './signup.page';
import { InputModule } from '../components/input/input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    IonicModule,
    InputModule,
    RouterModule.forChild([{ path: '', component: SignupPage }]),

    SignupPageRoutingModule,
  ],
  declarations: [SignupPage],
})
export class SignupPageModule {}
