import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryBasicComponent } from './jquery-basic.component';

describe('JqueryBasicComponent', () => {
  let component: JqueryBasicComponent;
  let fixture: ComponentFixture<JqueryBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
