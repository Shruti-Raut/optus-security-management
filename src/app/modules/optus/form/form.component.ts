import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
name:string=""

constructor( public localStorage: StorageService,public router: Router){

}
StartQuestionForm(){
  this.localStorage.setValue("userName", this.name)
  this.router.navigate(['quiz']);
}
}
