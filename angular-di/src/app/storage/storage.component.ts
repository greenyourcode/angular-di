import { Component, OnInit } from '@angular/core';
import { PersistenceService } from './persistence.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.scss'],
  providers: [
    PersistenceService
  ]
})
export class StorageComponent implements OnInit {

  constructor(private persistenceService: PersistenceService) { }

  ngOnInit(): void {
  }

}
