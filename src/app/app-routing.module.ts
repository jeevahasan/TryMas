import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCustomerComponent } from "./Customer/add-customer/add-customer.component";
import { ViewCustomersComponent } from "./Customer/view-customers/view-customers.component";
import { AddNewLinkOperatorComponent } from "./LinkOperator/add-new-link-operator/add-new-link-operator.component";
import { ViewLinkOperatorsComponent } from "./LinkOperator/view-link-operators/view-link-operators.component";
import { SignupComponent } from "./Admin/signup/signup.component"
import { SigninComponent } from "./Admin/signin/signin.component"

const routes: Routes = [
  { path: '', component: AddCustomerComponent },
  { path: 'viewAllCustomers', component: ViewCustomersComponent },
  { path: 'addNewLinkOperator', component: AddNewLinkOperatorComponent },
  { path: 'viewAllLinkOperators', component: ViewLinkOperatorsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
