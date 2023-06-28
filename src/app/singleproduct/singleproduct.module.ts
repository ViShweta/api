import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleproductPageRoutingModule } from './singleproduct-routing.module';

import { SingleproductPage } from './singleproduct.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleproductPageRoutingModule
  ],
  declarations: [SingleproductPage]
})
export class SingleproductPageModule {}
