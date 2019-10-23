import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { CustomerService } from 'src/app/Shared/customer.service';
import { Customer } from 'src/app/Shared/customer.model';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  list:Customer[];
  currentCustomer: Customer;
  id: any;
  constructor(public route: ActivatedRoute,
    public service:CustomerService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.getCustomers().subscribe(actionArray => {
      this.list = actionArray.map(item =>{
        //console.log(item)
        return {
          id: item.payload.doc.id,
          ...item.payload.doc.data()
          
        } as Customer;
      })
      for (var i = 0; i < this.list.length; i++){
        if ( this.list[i].agreementNo == this.id){
          this.currentCustomer = this.list[i];
          console.log(this.list[i]);
        }
      }
    });

    
    
  }
}
