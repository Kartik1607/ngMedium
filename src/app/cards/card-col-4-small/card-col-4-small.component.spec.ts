import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCol4SmallComponent } from './card-col-4-small.component';

describe('CardCol4SmallComponent', () => {
  let component: CardCol4SmallComponent;
  let fixture: ComponentFixture<CardCol4SmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCol4SmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCol4SmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
