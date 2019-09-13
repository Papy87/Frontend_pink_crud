import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HoverDirective } from './hover.directive';
import { UgovoriModule } from './ugovori/ugovori.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { OdmorModule } from './odmor/odmor.module';
import { RadnikModule } from './radnik/radnik.module';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS, DateAdapter } from '@angular/material/core';
import { NotUserComponent } from './not-user/not-user.component';
import { AuthInterceptor } from './login/auth.interceptor';
import { DateRangeSelectionComponent } from './date-range-selection/date-range-selection.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HoverDirective,
    HomeComponent,
    LoginComponent,
    NotFoundComponent,
    NotUserComponent
 
    
    
  ],
  imports: [

    BrowserModule,
    FormsModule,
    UgovoriModule,
    OdmorModule,
    RadnikModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  
   
    
    
    
   
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
