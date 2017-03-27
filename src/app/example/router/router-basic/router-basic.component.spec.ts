import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterBasicComponent } from './router-basic.component';

describe('RouterBasicComponent', () => {
  let component: RouterBasicComponent;
  let fixture: ComponentFixture<RouterBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
