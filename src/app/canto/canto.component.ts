import { Component, OnInit } from '@angular/core';
import { CANTOS } from '../mock-cantos';
import { DICT } from '../mock-dict';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-canto',
  templateUrl: './canto.component.html',
  styleUrls: ['./canto.component.css']
})
export class CantoComponent implements OnInit {

  canto = CANTOS[5];

 constructor (private httpService: HttpClient) { }


  ngOnInit() { 
      this.httpService.get<any[]>('./../../assets/salida.json').subscribe(
      data => {console.log(data);
      }
    );

  }

}
