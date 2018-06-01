import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuizzPage } from '../quizz/quizz';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public formQuizz : FormGroup;
  public nbQuestions: number = null;
  public difficulte: string = "";

  constructor(
    public navCtrl: NavController,
    private fb: FormBuilder
  ) 
    {
      this.formQuizz = this.fb.group({
        nbQuestions: ['', Validators.required],
        difficulte:['', Validators.required]
      });
    }
  
  public goToQuizz(){
      this.navCtrl.push(QuizzPage, 
      {   nbQuestions: this.nbQuestions,
          difficulte: this.difficulte
      });
  }

}
