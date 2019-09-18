import { Injectable } from '@angular/core';
import { LinkOperator } from './link-operator.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LinkOperatorService {

  formData : LinkOperator;

  constructor(private firestore: AngularFirestore) { }

  getLinkOperators(){
    return this.firestore.collection('linkOperators').snapshotChanges();
  }
}
