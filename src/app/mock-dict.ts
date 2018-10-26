import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DiccionarioService {

  dict: any[] = [];

  constructor(private http: HttpClient) {
      this.http.get<any[]>('./../../assets/salida.json').subscribe(
        data => {
            this.dict = data;
            console.log(this.dict);
        }
    );
  }

  getAll(): any[] {
    return this.dict;
  }
}


