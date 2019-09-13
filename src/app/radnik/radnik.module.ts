import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadnikComponent } from './radnik.component';
import { RadnikListaComponent } from './radnik-lista/radnik-lista.component';
import { RadnikAddComponent } from './radnik-add/radnik-add.component';
import { RadnikEditComponent } from './radnik-edit/radnik-edit.component';
import{RadnikShowComponent} from './radnik-show/radnik-show.component';
import { RadnikRoutingModule } from './radnik.routing.module';
import { RadnikFilterPipe } from './radni.filter.pipe';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
RadnikFilterPipe,
RadnikComponent,
RadnikListaComponent,
RadnikAddComponent,
RadnikEditComponent,
RadnikShowComponent

],
  exports:[
 ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RadnikRoutingModule,
    ReactiveFormsModule
   
  ]
})
export class RadnikModule {}