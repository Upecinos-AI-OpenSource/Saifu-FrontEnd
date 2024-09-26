import {RouterModule, Routes} from '@angular/router';
import {SignupComponent} from "./authentication/components/signup/signup.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {NgModule} from "@angular/core";
import {AddTransactionComponent} from "../saifu/add-transaction/add-transaction.component";
import {RegisterDataComponent} from "../saifu/register-data/register-data.component";
import {RegisterTransactionComponent} from "../saifu/register-transaction/register-transaction.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  { path: 'add-transaction', component: AddTransactionComponent },
  { path: 'register-data', component: RegisterDataComponent },
  { path: 'register-transaction', component: RegisterTransactionComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
