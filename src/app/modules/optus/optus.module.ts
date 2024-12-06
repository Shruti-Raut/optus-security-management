import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OptusRoutingModule } from './optus-routing.module';
import { FormComponent } from './form/form.component';
import { QuizComponent } from './quiz/quiz.component';
import { CustomMaterialModule } from 'src/app/shared/angular-material/custom-material.module';


@NgModule({
  declarations: [
    FormComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    OptusRoutingModule,
    CustomMaterialModule
  ]
})
export class OptusModule { }
