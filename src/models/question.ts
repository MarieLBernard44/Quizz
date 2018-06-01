export class Question {
    public question: string;
    public correct_answer: string;
    public incorrect_answers: string[];
    public category: string;
    public type: string;
    public difficulty: string;
    public reponses: string[];
    public reponseChoisie: string;

    public constructor(reponseChoisie: string, question: string, correct_answer: string, incorrect_answers: string[], category: string, type: string, difficulty: string, reponses: string[]) {
        this.question = question;
        this.correct_answer = correct_answer;
        this.incorrect_answers = incorrect_answers;
        this.category = category;
        this.type = type;
        this.difficulty = difficulty;
        this.reponses = reponses;
        this.reponseChoisie = reponseChoisie;
    }
}