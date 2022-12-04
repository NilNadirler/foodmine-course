import { Order } from './../../../shared/models/order';
import { Component, Input, OnInit } from '@angular/core';


declare var paypal: any;

@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit {

  @Input()
  order!:Order;

  constructor() { }

  ngOnInit(): void {
  }

}
