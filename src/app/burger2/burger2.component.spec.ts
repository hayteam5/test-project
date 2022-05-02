import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burger2Component } from './burger2.component';

describe('Burger2Component', () => {
  let component: Burger2Component;
  let fixture: ComponentFixture<Burger2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Burger2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Burger2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
