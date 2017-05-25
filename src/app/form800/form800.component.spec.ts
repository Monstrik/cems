import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form800Component } from './form800.component';

describe('Form800Component', () => {
  let component: Form800Component;
  let fixture: ComponentFixture<Form800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
