import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HashTable } from 'angular-hashtable';

@Injectable()
export class DiccionarioService {

  dict: any = null;
  table: HashTable<string, any>;

  constructor(private http: HttpClient) {
      this.http.get<any>('./../../assets/salida.json').subscribe(
        data => {
            this.dict = data;
            //console.log(this.dict);
            //console.log(this.dict.items.item);
            this.table = new HashTable<string, any>();

            for (let w of this.dict.items.item) {
                this.table.put(w.word, {
                    trad: w.trads? w.trads.value.lemma_definition: null,
                    link: w.link
                });
                console.log(this.table.get(w.word)); 
            }

        }
    );
  }

  getAll(): any {
    return this.dict;
  }
}


