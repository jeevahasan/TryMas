import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AddCustomerComponent } from './Customer/add-customer/add-customer.component';
import { CustomerService } from './Shared/customer.service';
import { ViewCustomersComponent } from './Customer/view-customers/view-customers.component';
import { AddNewLinkOperatorComponent } from './LinkOperator/add-new-link-operator/add-new-link-operator.component';
import { ViewLinkOperatorsComponent } from './LinkOperator/view-link-operators/view-link-operators.component';
import { SignupComponent } from './Admin/signup/signup.component';
import { SigninComponent } from './Admin/signin/signin.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SideBarComponent } from './Customer/side-bar/side-bar.component';
import { MaterialModule } from './material-module';
import { AddMonthlyPaymentComponent } from './Customer/add-monthly-payment/add-monthly-payment.component';
import { UpdateCustomerComponent } from './Customer/update-customer/update-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    AddCustomerComponent,
    ViewCustomersComponent,
    AddNewLinkOperatorComponent,
    ViewLinkOperatorsComponent,
    SignupComponent,
    SigninComponent,
    SideBarComponent,
    AddMonthlyPaymentComponent,
    UpdateCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireAuthModule,
    ToastrModule.forRoot(),
    NoopAnimationsModule,
    MaterialModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
