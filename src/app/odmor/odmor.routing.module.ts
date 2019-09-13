import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OdmorComponent } from './odmor.component';
import { OdmorListaComponent } from './odmor-lista/odmor-lista.component';
import { OdmorEditComponent } from './odmor-edit/odmor-edit.component';
import { OdmorShowComponent } from './odmor-show/odmor-show.component';
import { OdmorAddComponent } from './odmor-add/odmor-add.component';


const odmorRoutes: Routes = [
  { path: 'odmor', component: OdmorComponent,children: [
  {path:'list',component:OdmorListaComponent},
  {path:'add',component:OdmorAddComponent},
  { path:'show/:id',component:OdmorShowComponent },
  {path:'edit/:id',component:OdmorEditComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(odmorRoutes)
  ],
  exports: [RouterModule],
  providers: [
   
  ]
})
export class OdmorRoutingModule {}