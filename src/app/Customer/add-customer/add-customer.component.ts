import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Shared/customer.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  constructor(public service : CustomerService,
    public firestore:AngularFirestore,public toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }

    this.service.formData = {
      id : null,
      fullName : '',
      agreementNo : null,
      nic : '',
      no : '',
      road : '',
      district : '',
      phoneNo : null,
      status : '',
      connectionDate : null,
      advancedPayment : null,
      duePayment : null,
      lastPaymentDate : null

    }
  }

  onSubmit(form : NgForm){
    try {
      let data = form.value;
      this.firestore.collection('customers').add(data);
      this.resetForm(form);
      this.toastr.success('Added Successfully','New Customer')
      
    } catch (error) {
      
      
    }

    

  }

}
