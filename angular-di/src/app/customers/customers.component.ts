import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CustomersService } from './customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomersService] // TO TEST ??? 
})
export class CustomersComponent implements OnInit {
  displayName: string;
  constructor(
    public userService: UserService,
    private customerService: CustomersService) { }

  ngOnInit(): void {
    this.displayName = this.customerService.displayName();
  }

}
