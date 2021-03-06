import { LoggerService } from './../core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers/customers.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  displayName: string;

  constructor(
    public userService: UserService,
    private customerService: CustomersService,
    public loggerService: LoggerService) { }

  ngOnInit(): void {
    this.displayName = this.customerService.displayName();
  }
}
