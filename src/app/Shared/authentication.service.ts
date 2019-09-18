import { Injectable } from '@angular/core';
import { Signup } from './admin.model';
import { Signin } from './admin.model';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  formData : Signup;
  formDataSignin : Signin;
  authState: any = null;

  constructor(private db: AngularFirestore, private auth: AngularFireAuth, private router: Router) {
    this.auth.authState.subscribe((authS) => {
      this.authState = authS;
      localStorage.setItem('authState', JSON.stringify(authS));
    });
  }
  emailSignUp(email: string, password: string) {
    return this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        console.log(this.authState)
        // this.updateUserData();
      })
      .catch(error =>{
        console.log(error);
      });
      
  }

  get currentUserId(): string {
    return (this.authState) ? this.authState.uid : '';
  }

  get currentUserName(): string {
    return (this.authState) ? this.authState.email : '';
  }

  get isUserLoggedIn(): boolean {
    this.authState = JSON.parse(localStorage.getItem('authState'));
    if (this.authState) {
      return true;
    } else {
      return false;
    }
  }
  isAuth() {
    this.authState = JSON.parse(localStorage.getItem('authState'));
    if (this.authState) {
      return true;
    } else {
      return false;
    }
  }
  

  // public updateUserData(): void {
  //   // Writes user name and email to realtime db
  //   // useful if your app displays information about users or for admin features

  //     const path = `Users/${this.currentUserId}`; // Endpoint on firebase
  //     const data = {
  //                   email: this.authState.email,
  //                   name: this.authState.displayName
  //                 };

  //     this.db.object(path).update(data)
  //     .catch(error => console.log(error));

  //   }


  login(email: string, password: string) {
    return this.auth.auth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user;
        localStorage.setItem("uid",user.user.uid);
        console.log(localStorage.getItem('uid'));
      }).catch((err) => {
        console.error(err);
        localStorage.setItem('authState', null);
        throw err;
      });
  }

  logout(): void {
    this.auth.auth.signOut();
    this.authState = null;
    localStorage.setItem('authState', null);
    this.router.navigate(['/']);
  }
  // getUserList(path): Observable<any[]> {
  //   // console.log(this.db.list(path).valueChanges().subscribe(data => data));
  //   return this.db.list(path).valueChanges();
  // }

  resetPassword(email: string) {
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => console.log("email sent"))
      .catch((error) => console.log(error))
  }
}

