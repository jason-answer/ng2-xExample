import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InquriyListComponent } from './inquriy-list.component';

describe('InquriyListComponent', () => {
  let component: InquriyListComponent;
  let fixture: ComponentFixture<InquriyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InquriyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InquriyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
