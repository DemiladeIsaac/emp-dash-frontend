import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import { OverviewComponent } from './overview/overview.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { EmpDirComponent } from './emp-dir/emp-dir.component';
import { DelEmpComponent } from './del-emp/del-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { UpdatePageComponent } from './Pages/update-page/update-page.component';
// import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    DashboardComponent,
    OverviewComponent,
    AddEmpComponent,
    EmpDirComponent,
    DelEmpComponent,
    UpdateEmpComponent,
    UpdatePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
