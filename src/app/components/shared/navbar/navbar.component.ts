import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  MostarMenu:boolean=false;

  constructor(private _router:Router) { }



  ngOnInit() {
  }

  buscarDogs(termino:string){
    console.log(termino);
    this._router.navigate(['/buscar',termino]);
  }

}
