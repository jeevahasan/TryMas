import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  formData : Customer;

  constructor(private firestore:AngularFirestore) {}

  getCustomers(){
    return this.firestore.collection('customers').snapshotChanges();
  }
}
