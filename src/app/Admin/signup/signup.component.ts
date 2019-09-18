import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Shared/authentication.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public service : AuthenticationService,
    public firestore:AngularFirestore,public toastr:ToastrService, 
    public authService:AuthenticationService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form ?: NgForm){
    if(form != null){
      form.resetForm();
    }

    this.service.formData = {
      fullName : '',
      email : '',
      pass : '',
    }
  }

  onSubmit(form : NgForm){
      console.log(form.value.fullName)
      console.log(form.value.email)
      console.log(form.value.pass)
      this.authService.emailSignUp(form.value.email, form.value.pass)
      .then((res) => {
          console.log('submitted successfully');
          console.log(this.authService.currentUserId);
    }).catch ((error) => {
      console.log(error);
      });  

    }
}