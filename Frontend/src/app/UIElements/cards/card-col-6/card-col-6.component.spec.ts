import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCol6Component } from './card-col-6.component';

describe('CardCol6Component', () => {
  let component: CardCol6Component;
  let fixture: ComponentFixture<CardCol6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCol6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCol6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
