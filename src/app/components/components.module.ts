// Esto ya venía
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

//Esto lo agregué yo
import { IonicModule } from '@ionic/angular';
import { PopoverInfoComponent } from './popover-info/popover-info.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  //Se exporta porque lo usare afuera
  exports: [
    HeaderComponent,
    PopoverInfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule//Se importan para que reconozca las etiqutas de ionic,
    //como son <ion-header> y otras
  ]
})
export class ComponentsModule { }
