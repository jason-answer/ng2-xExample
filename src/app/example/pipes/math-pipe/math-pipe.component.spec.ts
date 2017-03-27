import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathPipeComponent } from './math-pipe.component';

describe('MathPipeComponent', () => {
  let component: MathPipeComponent;
  let fixture: ComponentFixture<MathPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
