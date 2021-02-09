import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { PersistenceService, STORAGE } from '../services/persistence.service';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.scss'],
  providers: [
    PersistenceService,
    { provide: STORAGE, useValue: sessionStorage } // if alone, use PersistenceService else use sessionStorage
  ]
})
export class ErrorCardComponent implements OnInit {
  @Input() template: TemplateRef<any>;

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit(): void {
    this.persistenceService.set('error', { text: 'ça va pas !' });
  }

}
