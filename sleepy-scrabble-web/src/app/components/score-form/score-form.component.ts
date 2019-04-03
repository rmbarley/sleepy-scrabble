import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Word } from 'src/app/+state/word.interface';
import { AppService } from 'src/app/app.service';
import { map, switchMap } from 'rxjs/operators';
import { timer } from 'rxjs';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.sass']
})
export class ScoreFormComponent implements OnInit {
  newWordForm: FormGroup;
  wordToShow: Word;
  multipliers = [{ value: 1, text: '1x' }, { value: 2, text: '2x' }, { value: 3, text: '3x' }];
  constructor(private service: AppService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.newWordForm = this.formBuilder.group({
      word: new FormControl(
        '',
        [Validators.required, Validators.pattern('[a-zA-Z]*')]
        // this.checkWordIsValid.bind(this)
      ),
      scoreMultiplier: new FormControl(this.multipliers[0].value)
    });
  }

  onSubmit() {
    const { word, scoreMultiplier }: { word: string; scoreMultiplier: string } = this.newWordForm.value;
    const score = this.calculateScoreForWord(word, +scoreMultiplier);
    const newWord: Word = { word, score };

    // Need to set up some Actions/Subjects so I don't have to subscribe
    this.service.saveNewWord(newWord).subscribe(() => {
      console.log('Word saved');
      this.wordToShow = newWord;
    });

    // Reset form
    this.createForm();
  }

  isFormValid() {
    return this.newWordForm.invalid && (this.newWordForm.dirty || this.newWordForm.touched);
  }

  calculateScoreForWord(aWord: string, multiplier: number) {
    const result = aWord.toLowerCase().split('');
    return result.map(x => this.scoreFor(x)).reduce((a, b) => a + b, 0) * multiplier;
  }

  scoreFor(aLetter: string): number {
    switch (aLetter) {
      case 'd':
      case 'g':
        return 2;
      case 'b':
      case 'c':
      case 'm':
      case 'p':
        return 3;
      case 'f':
      case 'h':
      case 'v':
      case 'w':
      case 'y':
        return 4;
      case 'k':
        return 5;
      case 'j':
      case 'x':
        return 8;
      case 'z':
      case 'q':
        return 10;
      default:
        return 1;
    }
  }

  checkWordIsValid(control: AbstractControl) {
    return timer(500).pipe(
      switchMap(() => {
        return this.service.validateWord(control.value).pipe(
          map(res => {
            return res ? null : { wordNotValid: true };
          })
        );
      })
    );
  }
}
