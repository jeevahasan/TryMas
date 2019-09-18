import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/Shared/customer.service';
import { Customer } from 'src/app/Shared/customer.model';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrls: ['./view-customers.component.css']
})
export class ViewCustomersComponent implements OnInit {
  searchText: string = ""; 
  list:Customer[];
  constructor(public service:CustomerService) { }

  ngOnInit() {
    this.service.getCustomers().subscribe(actionArray => {
      this.list = actionArray.map(item =>{
        return {
          ...item.payload.doc.data()
        } as Customer
      })

    });
  }

  filterCondition(customer : Customer){
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
