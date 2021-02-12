import { HighlightDirective } from './highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';


@NgModule({
  declarations: [CustomersComponent, HighlightDirective],
  imports: [
    CommonModule,
    CustomersRoutingModule,
  ]
})
export class CustomersModule { }
