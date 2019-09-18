import { Component, OnInit } from '@angular/core';
import { LinkOperatorService } from 'src/app/Shared/link-operator.service';
import { LinkOperator } from 'src/app/Shared/link-operator.model';

@Component({
  selector: 'app-view-link-operators',
  templateUrl: './view-link-operators.component.html',
  styleUrls: ['./view-link-operators.component.css']
})
export class ViewLinkOperatorsComponent implements OnInit {

  searchText: string = ""; 
  list: LinkOperator[];
  constructor(public service : LinkOperatorService) { }

  ngOnInit() {
    this.service.getLinkOperators().subscribe(actionArray => {
      this.list = actionArray.map(item =>{
        return {
          ...item.payload.doc.data()
        } as LinkOperator
      })

    });
  }

  filterCondition(linkOperator : LinkOperator){
    return linkOperator.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}
