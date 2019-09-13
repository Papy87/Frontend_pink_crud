import { NgModule } from '@angular/core';
import{Routes, RouterModule, PreloadAllModules} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotUserComponent } from './not-user/not-user.component';
import { AuthGuard } from './not-user/not-user.auth.guard';
import{AuthGuardLogin} from './login/auth.guards.login';;




const appRoutes: Routes = [
    {path:'', component:LoginComponent,canActivate: [AuthGuardLogin]},
    {path:'not-user',component:NotUserComponent ,canActivate: [AuthGuard]},
    {path:'not-found', component:NotFoundComponent , data:{message:'Page Not found'}},
    {path:'**', redirectTo:'/not-found'}, 
];
    @NgModule({

        imports:[RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
        exports:[RouterModule]
        
        
        })
        export class AppRoutingModule {
        
        
        
        }