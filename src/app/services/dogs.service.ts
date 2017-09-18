import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'
import { Dog } from './../interfaces/dogs.interface'
import 'rxjs/Rx';

@Injectable()
export class DogsService {


  dogsURL:string = "https://dogsapp-1d487.firebaseio.com/dogs.json";


    constructor( private http:Http) {
      console.log('Listo para usar');

    }

    nuevoDog( dog:Dog ){
      let body= JSON.stringify( dog );
      let headers = new Headers({
        'Content-Type':'application/json'
      });

      return this.http.post( this.dogsURL, body, { headers })
        .map( res=>{
          console.log(res.json());
          return res.json();
        })

    }


}

