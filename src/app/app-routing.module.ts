import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from "./registration/registration.component";

const appRoute:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'register',component:RegistrationComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard',component:DashboardComponent}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {

}