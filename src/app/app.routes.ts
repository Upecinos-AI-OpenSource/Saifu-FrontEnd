import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {EducacionFinancieraComponent} from "./public/pages/educacion-financiera/educacion-financiera.component";
import {TasaCrediticiaComponent} from "./public/pages/tasa-crediticia/tasa-crediticia.component";
import {SignupComponent} from "./authentication/components/signup/signup.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  { path: '', component: HomeComponent },
  { path: 'educacion-financiera', component: EducacionFinancieraComponent },
  { path: 'tasa-crediticia', component: TasaCrediticiaComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

