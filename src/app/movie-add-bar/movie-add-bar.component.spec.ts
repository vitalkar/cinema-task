import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieAddBarComponent } from './movie-add-bar.component';

describe('MovieAddBarComponent', () => {
  let component: MovieAddBarComponent;
  let fixture: ComponentFixture<MovieAddBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieAddBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieAddBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
