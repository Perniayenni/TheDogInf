import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
//import { DogsService, Dog } from '../../services/dogs.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
 // dogs:Dog[]=[];
  termino:string;

  constructor(
   // private _dogsService:DogsService,
    private activatedRoute:ActivatedRoute) { }



  ngOnInit() {
   /* this.activatedRoute.params.subscribe( params =>{
      this.termino = (params['termino']);
      this.dogs=this._dogsService.buscarDogs(params['termino']);
    })*/

  }

}
