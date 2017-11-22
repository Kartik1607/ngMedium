import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCol4LongComponent } from './card-col-4-long.component';

describe('CardCol4LongComponent', () => {
  let component: CardCol4LongComponent;
  let fixture: ComponentFixture<CardCol4LongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCol4LongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCol4LongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
