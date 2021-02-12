import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/core/services/logger.service';
import { OrderListService } from '../order-list/order-list.service';

@Component({
  selector: 'app-order-list-item',
  templateUrl: './order-list-item.component.html',
  styleUrls: ['./order-list-item.component.scss']
})
export class OrderListItemComponent implements OnInit {

  constructor(public loggerService: LoggerService) { }

  ngOnInit(): void {
  }

}
