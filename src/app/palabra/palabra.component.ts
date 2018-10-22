import { Component, Input, OnInit } from '@angular/core';
import { Palabra } from './palabra';

@Component({
  selector: 'app-palabra',
  templateUrl: './palabra.component.html',
  styleUrls: ['./palabra.component.css']
})
export class PalabraComponent implements OnInit {
   @Input() palabra: string;

  constructor() { }

  ngOnInit() {
  }
}
