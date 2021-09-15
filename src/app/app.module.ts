import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthInterceptor } from './auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
