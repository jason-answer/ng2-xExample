import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterParameterComponent } from './router-parameter.component';

describe('RouterParameterComponent', () => {
  let component: RouterParameterComponent;
  let fixture: ComponentFixture<RouterParameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterParameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
