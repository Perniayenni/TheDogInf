import { Component, OnInit } from '@angular/core';
import { DogsService, Dog } from '../../services/dogs.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  dogs:Dog[]=[];

  constructor( private _dogsService:DogsService,
                private _router:Router) { }

  ngOnInit() {
    this.dogs = this._dogsService.getDogs();
    console.log(this.dogs);
  }

  LeerMas(id:number){
    console.log(id);
      this._router.navigate(['/dog',id]);
  }

}
