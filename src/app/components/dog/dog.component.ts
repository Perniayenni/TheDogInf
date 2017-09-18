import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DogsService } from '../../services/dogs.service';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent {

  dog:any={};
  constructor(
    private activatedRoute: ActivatedRoute,
    private _dogsService:DogsService) {

    /*this.activatedRoute.params.subscribe( params =>{
      this.dog = this._dogsService.getDog(params['id']);
    })*/
  }

}
