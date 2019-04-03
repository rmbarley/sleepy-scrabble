import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWordCardComponent } from './recent-word-card.component';

describe('RecentWordCardComponent', () => {
  let component: RecentWordCardComponent;
  let fixture: ComponentFixture<RecentWordCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentWordCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
