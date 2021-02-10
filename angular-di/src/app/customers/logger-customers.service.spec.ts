import { TestBed } from '@angular/core/testing';

import { LoggerCustomersService } from './logger-customers.service';

describe('LoggerCustomersService', () => {
  let service: LoggerCustomersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerCustomersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
