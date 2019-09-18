import { Component, OnInit } from '@angular/core';
import { LinkOperatorService } from 'src/app/Shared/link-operator.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-new-link-operator',
  templateUrl: './add-new-link-operator.component.html',
  styleUrls: ['./add-new-link-operator.component.css']
})
export class AddNewLinkOperatorComponent implements OnInit {

  constructor(public service: LinkOperatorService,
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
      area : '',
      phoneNo : null,
      noOfCustomers:null,
      status : '',
      connectionDate : null,
      payment : null,
      lastPaymentDate : null

    }
  }

  onSubmit(form : NgForm){
    try {
      let data = form.value;
      this.firestore.collection('linkOperators').add(data);
      this.resetForm(form);
      this.toastr.success('Added Successfully','New Link Operator')
      
    } catch (error) {
      
      
    }

    

  }



}
