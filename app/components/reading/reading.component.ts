import { Component, OnInit } from '@angular/core';

import { ReadingService } from './reading.service';

@Component({
	moduleId: module.id,
	selector: 'reading',
    templateUrl: 'reading.component.html',
    providers: [ReadingService]
})
export class ReadingComponent implements OnInit{ 
	title = 'Choose correct answer';
	questions: Object[];
	correct: number;
	constructor(private readingService:ReadingService) {
		this.readingService.getQuestions()
			.subscribe(questions => {
				this.questions = questions;
			});
  	}

  	ngOnInit() {
  		
  	}


  saveStatus(question: Object, value:String) {
    question['option'] = value;
  }

  check() {
    this.correct = 0;

    for (let i = 0; i < this.questions.length; i ++){
      if(this.questions[i]['option'] == this.questions[i]['correct_answer']){
        this.correct++;
        this.questions[i]['status'] = "True";
      }else{
        this.questions[i]['status'] = "False";
      }
    }
  }
}