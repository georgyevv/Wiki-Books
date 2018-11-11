import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAdmComponent } from './author-adm.component';

describe('AuthorAdmComponent', () => {
  let component: AuthorAdmComponent;
  let fixture: ComponentFixture<AuthorAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
