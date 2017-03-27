import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanPipeComponent } from './boolean-pipe.component';

describe('BooleanPipeComponent', () => {
  let component: BooleanPipeComponent;
  let fixture: ComponentFixture<BooleanPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
