import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsComponent } from './als.component';

describe('AlsComponent', () => {
  let component: AlsComponent;
  let fixture: ComponentFixture<AlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
