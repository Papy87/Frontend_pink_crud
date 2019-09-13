import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RadnikComponent } from './radnik.component';
import { RadnikListaComponent } from './radnik-lista/radnik-lista.component';
import { RadnikAddComponent } from './radnik-add/radnik-add.component';
import { RadnikShowComponent } from './radnik-show/radnik-show.component';
import { RadnikEditComponent } from './radnik-edit/radnik-edit.component';
import { AuthGuard } from '../auth.guards';



const odmorRoutes: Routes = [
  { path: 'radnik', component: RadnikComponent,canActivate: [AuthGuard],children: [
  {path:'list',component:RadnikListaComponent},
  {path:'add',component:RadnikAddComponent},
  { path:'show/:id',component:RadnikShowComponent },
  {path:'edit/:id',component:RadnikEditComponent,canActivate: [AuthGuard]}
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
export class RadnikRoutingModule{}