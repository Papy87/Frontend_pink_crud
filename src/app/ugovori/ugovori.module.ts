import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UgovoriComponent } from './ugovori.component';
import { UgovorEditComponent } from './ugovor-edit/ugovor-edit.component';
import { UgovorShowComponent } from './ugovor-show/ugovor-show.component';
import { UgovoriRoutingModule } from './ugovori.routing.module';
import { UgovorListaComponent } from './ugovori-lista/ugovor-lista.component';
import { BrowserModule } from '@angular/platform-browser';
import { UgovorAddComponent } from './ugovor-add/ugovor-add.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { UgovoroFilterPipe } from './ugovori-filter.pipe';
import { ScheduleDateAdapter, SCHEDULE_DATE_FORMATS } from './ugovor.datepickerFormat';
import {NgbModule, NgbDateAdapter, NgbDateNativeAdapter} from '@ng-bootstrap/ng-bootstrap';
import { DateRangeSelectionComponent } from '../date-range-selection/date-range-selection.component';

@NgModule({
  declarations: [
    UgovoriComponent,
    UgovorEditComponent,
    UgovorShowComponent,
    UgovorListaComponent,
    UgovorAddComponent,
    UgovoroFilterPipe,
    DateRangeSelectionComponent
    

  ],
  exports: [
    MatDatepickerModule,
    MatNativeDateModule


  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BsDatepickerModule.forRoot(),
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    UgovoriRoutingModule,



  ],
  providers:[{provide: NgbDateAdapter,useClass: NgbDateNativeAdapter}],
  
  
  /*[MatDatepickerModule, {
    provide: DateAdapter, useClass: ScheduleDateAdapter
  },
    {
      provide: MAT_DATE_FORMATS, useValue: SCHEDULE_DATE_FORMATS
    }]*/
})
export class UgovoriModule { }