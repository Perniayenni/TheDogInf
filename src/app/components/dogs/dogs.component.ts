import {Component, OnInit, Output} from '@angular/core';
import { DogsService } from '../../services/dogs.service';
import { Router } from '@angular/router';
import {FormGroup, FormControl, Validators, Form} from '@angular/forms';
import { AlertsComponent } from '../alerts/alerts.component';
import { Dog } from '../../interfaces/dogs.interface'


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  MostarModal:boolean = false;
  //dogs:Dog[]=[];

  sms:string;

 _alerts = new AlertsComponent();
  mostrarAlert:boolean=false;
  form : FormGroup;

  tamano:Array<string>= ['Grande','Mediano','Pequeño'];

  constructor( private _dogsService:DogsService,
                private _router:Router,
                //private _alerts:AlertsComponent
               ) {

    this.form = new FormGroup(
      {
      'raza': new FormControl('', [Validators.required]),
      'aparicion': new FormControl('', [Validators.required]),
      'tamano': new FormControl('', [Validators.required])
      }
    )
  }

  ngOnInit() {
    /*this.dogs = this._dogsService.getDogs();
    console.log(this.dogs);*/
  }

  /*LeerMas(id:number){
    console.log(id);
      this._router.navigate(['/dog',id]);
  }*/

  GuardarDatos(){

    this._dogsService.nuevoDog(this.form.value)
      .subscribe( data=>{
        this.sms='Raza guardada con éxito';
          this.mostrarAlert=true;
        //this._alerts.show_alert('Raza guardada con éxito', 1);
      },
      error=> console.error(error));
  }

}
