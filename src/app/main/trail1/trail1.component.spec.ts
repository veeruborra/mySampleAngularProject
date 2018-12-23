import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trail1Component } from './trail1.component';

describe('Trail1Component', () => {
  let component: Trail1Component;
  let fixture: ComponentFixture<Trail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
