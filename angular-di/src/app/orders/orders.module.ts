import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderListItemComponent } from './order-list-item/order-list-item.component';


@NgModule({
  declarations: [OrdersComponent, OrderListComponent, OrderListItemComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
