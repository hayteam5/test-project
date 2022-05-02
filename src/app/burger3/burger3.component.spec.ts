import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Burger3Component } from './burger3.component';

describe('Burger3Component', () => {
  let component: Burger3Component;
  let fixture: ComponentFixture<Burger3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Burger3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Burger3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
