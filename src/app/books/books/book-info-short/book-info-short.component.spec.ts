import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookInfoShortComponent } from './book-info-short.component';

describe('BookInfoShortComponent', () => {
  let component: BookInfoShortComponent;
  let fixture: ComponentFixture<BookInfoShortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookInfoShortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookInfoShortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
