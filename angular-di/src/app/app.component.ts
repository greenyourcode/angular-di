import { Component, OnInit } from '@angular/core';
import { LoggerService } from './core/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-di';

  constructor(
    public loggerService: LoggerService) {}

  ngOnInit() {
    console.log('name: ' + this.loggerService.name);
  }
}
