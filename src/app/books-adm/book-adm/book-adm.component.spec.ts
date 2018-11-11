import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAdmComponent } from './book-adm.component';

describe('BookAdmComponent', () => {
  let component: BookAdmComponent;
  let fixture: ComponentFixture<BookAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
