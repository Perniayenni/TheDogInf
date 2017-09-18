import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  @Input()
  public mostrarAlert:boolean= false;
  @Input()
  sms:string="";
  @Input()
  borde:string="";

  constructor() { }

  ngOnInit() {
    this.show_alert(this.sms,1);
  }

  show_alert(sms:string, color:number) {
  switch (color) {
    case 1:
      this.borde = "3px solid green"; //para alerta positiva
      break;
    case 2:
      this.borde = "3px solid orange"; //para alerta de prevension
      break;
    case 3:
      this.borde = "3px solid red"; // para alerta erronea
      break;

  }
  this.sms=sms;

    //this.mostrarAlert= true;
    console.log(this.mostrarAlert+" "+this.sms+" Imprimiendo esto");

    // cierra las alertas
        setTimeout( ()=> this.mostrarAlert = false, 3000);

  }


}
