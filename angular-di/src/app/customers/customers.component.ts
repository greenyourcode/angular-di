import { LoggerCustomersService } from './logger-customers.service';
import { LoggerService } from './../core/services/logger.service';
import { Component, Host, OnInit, Self, SkipSelf } from '@angular/core';
import { UserService } from '../user.service';
import { CustomersService } from './customers.service';
import { OrderListService } from '../orders/order-list/order-list.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [
    CustomersService, 
    LoggerCustomersService,
    { provide: LoggerService, useValue : { name : 'LoggerService in Customers' }},
    OrderListService
  ]
})
export class CustomersComponent implements OnInit {
  displayName: string;
  constructor(
    public userService: UserService,
    private customerService: CustomersService,
    @Self() public loggerService: LoggerService,
    @Host() private LoggerCustomersService: LoggerCustomersService,
    public orderListService: OrderListService) { }

  ngOnInit(): void {
    this.displayName = this.customerService.displayName();
    console.log('name: ' + this.loggerService.name);
    this.orderListService.setName('order111');
  }
}
