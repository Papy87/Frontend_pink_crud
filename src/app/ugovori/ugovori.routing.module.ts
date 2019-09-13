import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  UgovoriComponent } from './ugovori.component'
import{UgovorEditComponent} from'./ugovor-edit/ugovor-edit.component';
import { UgovorShowComponent} from './ugovor-show/ugovor-show.component'
import { UgovorListaComponent } from './ugovori-lista/ugovor-lista.component';
import { UgovorAddComponent } from './ugovor-add/ugovor-add.component';
import { AuthGuard } from '../auth.guards';


const ugovoriRoutes: Routes = [
  { path: 'ugovoriview', component: UgovoriComponent,canActivate: [AuthGuard],children: [
  {path:'list',component:UgovorListaComponent},
  { path:'new',component:UgovorAddComponent},
  { path:'show/:id',component:UgovorShowComponent},
  {path:'edit/:id',component:UgovorEditComponent,canActivate: [AuthGuard]}
  ]}
]

  


@NgModule({
  imports: [
    RouterModule.forChild(ugovoriRoutes)
  ],
  exports: [RouterModule],
  providers: [
   
  ]
})
export class UgovoriRoutingModule {}