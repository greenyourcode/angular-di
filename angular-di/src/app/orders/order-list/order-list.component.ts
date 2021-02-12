import { LoggerService } from './../../core/services/logger.service';
import { Component, OnInit } from '@angular/core';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  viewProviders: [
    { provide: LoggerService, useValue: { name : 'LoggerService in OrderList'} }
  ],
  providers: [ OrderListService ]
})
export class OrderListComponent implements OnInit {
  serviceInjectedName: string;
  constructor(
    public loggerService: LoggerService,
    private orderListService: OrderListService) { }

  ngOnInit(): void {
    this.orderListService.setName('order1');
    this.serviceInjectedName = this.orderListService.getName();
  }
}
