import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfoLongComponent } from './book-info-long.component';

describe('BookInfoLongComponent', () => {
  let component: BookInfoLongComponent;
  let fixture: ComponentFixture<BookInfoLongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoLongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoLongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
