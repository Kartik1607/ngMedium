import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFourComponent } from './group-four.component';

describe('GroupFourComponent', () => {
  let component: GroupFourComponent;
  let fixture: ComponentFixture<GroupFourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupFourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
