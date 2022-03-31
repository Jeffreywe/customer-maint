import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer.class';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  tblHdStyle:string = "text-danger fst-italic";
  customers: Customer[] = [
    new Customer(1, "MAX", "OH"),
    new Customer(2, "PG", "LA"),
    new Customer(3, "Amazon", "IL")
];

  constructor() { }

  ngOnInit(): void {
  }

}
