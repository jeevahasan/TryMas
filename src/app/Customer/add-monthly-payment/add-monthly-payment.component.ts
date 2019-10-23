import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Shared/customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-monthly-payment',
  templateUrl: './add-monthly-payment.component.html',
  styleUrls: ['./add-monthly-payment.component.css']
})
export class AddMonthlyPaymentComponent implements OnInit {

  constructor(public service : CustomerService) { }

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
      console.log(data);
      
    } catch (error) {
      
      
    }

    

  }
}
