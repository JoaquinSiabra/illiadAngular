import { Component, OnInit } from '@angular/core';
import { CANTOS } from '../mock-cantos';

@Component({
  selector: 'app-canto',
  templateUrl: './canto.component.html',
  styleUrls: ['./canto.component.css']
})
export class CantoComponent implements OnInit {

  canto = CANTOS[5];

  constructor() { }

  ngOnInit() {
  }

}
