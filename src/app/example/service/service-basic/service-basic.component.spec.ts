import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBasicComponent } from './service-basic.component';

describe('ServiceBasicComponent', () => {
  let component: ServiceBasicComponent;
  let fixture: ComponentFixture<ServiceBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
