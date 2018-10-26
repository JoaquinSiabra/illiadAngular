import { Component, OnInit } from '@angular/core';
import { CANTOS } from '../mock-cantos';

@Component({
  selector: 'app-canto',
  templateUrl: './canto.component.html',
  styleUrls: ['./canto.component.css']
})
export class CantoComponent implements OnInit {

  canto = CANTOS[5];
  dict: any[] = [];

 //constructor (private httpService: HttpClient) { }


  ngOnInit() { 
    /*  this.httpService.get<any[]>('./../../assets/salida.json').subscribe(
      data => {
        this.dict = data;
        console.log(this.dict);
      }
    );*/

  }

}
