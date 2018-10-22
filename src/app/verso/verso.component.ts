import { Component, Input, OnInit } from '@angular/core';
import { Verso } from './verso';

@Component({
  selector: 'app-verso',
  templateUrl: './verso.component.html',
  styleUrls: ['./verso.component.css']
})
export class VersoComponent implements OnInit {
  @Input() verso: Verso;
  versoSegmentado: string[];

  constructor() { }

  ngOnInit() {
    this.versoSegmentado = this.verso.text.split(' ');
  }

}
