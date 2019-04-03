import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HighScoreWordCardComponent } from './high-score-word-card.component';

describe('HighScoreWordCardComponent', () => {
  let component: HighScoreWordCardComponent;
  let fixture: ComponentFixture<HighScoreWordCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HighScoreWordCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HighScoreWordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
