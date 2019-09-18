import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Shared/authentication.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public service : AuthenticationService,
    public firestore:AngularFirestore,public toastr:ToastrService, 
    public router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }

    this.service.formData = {
      fullName:'',
      email : '',
      pass : '',
    }
  }

  onSubmit(form : NgForm){
      console.log(form.value.email)
      console.log(form.value.pass)
      this.service.login(form.value.email, form.value.pass)
      .then((result) => {
        this.router.navigate(['/addNewCustomer']);
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });

    }
}