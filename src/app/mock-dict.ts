import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import {OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class DiccionarioService implements OnInit {

  //dict: any = null;
  table: HashTable<string, any>;

  constructor(private http: HttpClient) {
  }

 ngOnInit() {
     /* this.http.get<any>('./../../assets/salida.json').subscribe(
        data => {
            this.dict = data;

            this.table = new HashTable<string, any>();

            for (let w of this.dict.items.item) {
                console.log(w.word);
                this.table.put(w.word, {
                    trad: w.trads? w.trads.value.lemma_definition: null,
                    link: w.link
                });
            }

        }
    );*/
  }

  getWord(ws: string): Observable<any> {
     // console.log(this.table);
   /* if (this.table) {
        console.log(this.table.get(ws));
        return of(this.table.get(ws));
    }*/

    return this.http.get<any>('./../../assets/salida.json').pipe(
        map(data =>  {

            if (this.table){
                return this.table.get(ws);
            }

            //this.dict = data;
            this.table = new HashTable<string, any>();

            for (let w of data) {
                console.log(w.word);

                this.table.put(w.word, {
                    trad: w.trads && w.trads[0] ? w.trads[0].lemma_definition : null,
                    link: w.link
                });
            }
            return this.table.get(ws);

        })
    );
  }
}


