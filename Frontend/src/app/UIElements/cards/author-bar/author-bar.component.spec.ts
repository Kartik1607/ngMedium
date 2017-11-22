import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorBarComponent } from './author-bar.component';

describe('AuthorBarComponent', () => {
  let component: AuthorBarComponent;
  let fixture: ComponentFixture<AuthorBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
