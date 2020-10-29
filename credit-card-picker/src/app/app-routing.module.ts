import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import { CreditCardComponent } from './components/credit-card/credit-card.component';


const routes: Routes = [
  { path: "home", component:CreditCardComponent},
  {path: "user", component:CreditCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
