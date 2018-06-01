import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuizzProvider } from '../../providers/quizz/quizz';
import { Question } from '../../models/question';

/**
 * Generated class for the QuizzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html',
})
export class QuizzPage {

  public nbQuestions: number;
  public difficulte: string;
  public questions: Question[];
  public correct_answer: string;
  public incorrect_answer: string[];
  public reponses: string[];
  public totalReponses: number;
  public reponseChoisie: string;
  public score: number = 0;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public quizzProvider: QuizzProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzPage');
    this.nbQuestions = this.navParams.get('nbQuestions');
    this.difficulte = this.navParams.get('difficulte');
    this.getQuestions();
  }

  public getQuestions() {
    if(this.nbQuestions && this.difficulte) {
      this.quizzProvider.getQuizz(this.nbQuestions, this.difficulte )
            .subscribe(
              (data) => {
                this.questions = data.results;
                for( var question of this.questions) {
                  this.correct_answer = question.correct_answer;
                  this.incorrect_answer = question.incorrect_answers;
  
                  // J'insère la bonne réponse dans le tableau d'incorrect_answer afin de réunir le total de réponses possibles
                  this.totalReponses = this.incorrect_answer.push(this.correct_answer);
                  
                }  
              },
              error => {
                console.error('Erreur: ', error);
              }
            )
    }
  }

  // Bouton de retour à la page d'accueil
  public returnHome(){
    this.navCtrl.popToRoot();
  }

}
