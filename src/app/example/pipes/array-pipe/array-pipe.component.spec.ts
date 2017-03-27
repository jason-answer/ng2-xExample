import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayPipeComponent } from './array-pipe.component';

describe('ArrayPipeComponent', () => {
  let component: ArrayPipeComponent;
  let fixture: ComponentFixture<ArrayPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrayPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrayPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
