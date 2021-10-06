import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { AddEmpComponent } from "./add-emp/add-emp.component";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DelEmpComponent } from "./del-emp/del-emp.component";
import { EmpDirComponent } from "./emp-dir/emp-dir.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { OverviewComponent } from "./overview/overview.component";
import { UpdatePageComponent } from "./Pages/update-page/update-page.component";
import { RegistrationComponent } from "./registration/registration.component";
import { UpdateEmpComponent } from "./update-emp/update-emp.component";

const appRoute:Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'register',component:RegistrationComponent},
    {path:'login', component:LoginComponent},
    {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
        {path:'',component:OverviewComponent},
        {path:'add-emp',component:AddEmpComponent},
        {path:'employees',component:EmpDirComponent},
        {path:'del-emp',component:DelEmpComponent},
        {path:'update-emp',component:UpdateEmpComponent},
        {path:'update-emp/:id',component:UpdatePageComponent}
    ]}
    
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoute)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {

}