import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPipeComponent } from './string-pipe.component';

describe('StringPipeComponent', () => {
  let component: StringPipeComponent;
  let fixture: ComponentFixture<StringPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
