import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFiveComponent } from './group-five.component';

describe('GroupFiveComponent', () => {
  let component: GroupFiveComponent;
  let fixture: ComponentFixture<GroupFiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
