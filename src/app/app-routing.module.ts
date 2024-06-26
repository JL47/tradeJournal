import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeHistoryComponent } from './trade-history/trade-history.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'trade-history', component: TradeHistoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
