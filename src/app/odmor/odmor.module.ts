import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OdmorComponent } from './odmor.component';
import { OdmorAddComponent } from './odmor-add/odmor-add.component';
import { OdmorEditComponent } from './odmor-edit/odmor-edit.component';
import { OdmorListaComponent } from './odmor-lista/odmor-lista.component';
import { OdmorRoutingModule } from './odmor.routing.module';
import { OdmorShowComponent } from './odmor-show/odmor-show.component';

@NgModule({
  declarations: [
OdmorComponent,
OdmorAddComponent,
OdmorEditComponent,
OdmorListaComponent,
OdmorAddComponent,
OdmorShowComponent
],
  exports:[
 ],
  imports: [
    CommonModule,
    FormsModule,
    OdmorRoutingModule
   
  ]
})
export class OdmorModule {}