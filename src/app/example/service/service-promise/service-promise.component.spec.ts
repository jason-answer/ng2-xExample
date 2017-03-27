import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePromiseComponent } from './service-promise.component';

describe('ServicePromiseComponent', () => {
  let component: ServicePromiseComponent;
  let fixture: ComponentFixture<ServicePromiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePromiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
