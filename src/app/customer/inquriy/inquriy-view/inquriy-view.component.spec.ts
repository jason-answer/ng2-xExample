import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquriyViewComponent } from './inquriy-view.component';

describe('InquriyViewComponent', () => {
  let component: InquriyViewComponent;
  let fixture: ComponentFixture<InquriyViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquriyViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquriyViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
