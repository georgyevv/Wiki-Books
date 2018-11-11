import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsAdmComponent } from './authors-adm.component';

describe('AuthorsAdmComponent', () => {
  let component: AuthorsAdmComponent;
  let fixture: ComponentFixture<AuthorsAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
