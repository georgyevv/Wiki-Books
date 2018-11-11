import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAdmComponent } from './books-adm.component';

describe('BooksAdmComponent', () => {
  let component: BooksAdmComponent;
  let fixture: ComponentFixture<BooksAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
