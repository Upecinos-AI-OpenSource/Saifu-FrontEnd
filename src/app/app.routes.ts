import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./authentication/components/signup/signup.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {NgModule} from "@angular/core";



export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '',redirectTo: 'login', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
