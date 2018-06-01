import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the QuizzProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuizzProvider {

  public apiUrl: string = "https://opentdb.com/api.php?amount=10&difficulty=easy";

  constructor(private http: Http) {
    console.log('Hello QuizzProvider Provider');
  }

  public getQuizz(nbQuestions: number, difficulte: string) {
    console.log('https://opentdb.com/api.php?amount=' + nbQuestions + '&difficulty=' + difficulte);
    return this.http.get('https://opentdb.com/api.php?amount=' + nbQuestions + '&difficulty=' + difficulte)
                  .map(res => res.json());     
  }

}
