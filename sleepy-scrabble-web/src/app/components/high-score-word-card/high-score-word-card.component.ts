import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Word, WordsState } from 'src/app/+state/word.interface';
import { Store, select } from '@ngrx/store';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-high-score-word-card',
  templateUrl: './high-score-word-card.component.html',
  styleUrls: ['./high-score-word-card.component.sass']
})
export class HighScoreWordCardComponent implements OnInit {
  words: Array<any>;
  constructor(private service: AppService) {}

  ngOnInit() {
    this.service.getAllWords().subscribe(data => {
      this.words = data;
    });
  }

  sortWordsByScore(words) {}
}
