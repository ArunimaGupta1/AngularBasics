import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products: Product[] = [{
    pcode: "XYZ-001",
    pname: "Pencil",
    available: "March 19,2022",
    price: 20.89,
    rating: 4.5
  },
  {
    pcode: "XYZ-002",
    pname: "Pen",
    available: "March 19,2012",
    price: 20.00,
    rating: 3.5
  },
  {
    pcode: "XYZ-003",
    pname: "Eraser",
    available: "March 19,2019",
    price: 10.00,
    rating: 4.5
  }]
}
