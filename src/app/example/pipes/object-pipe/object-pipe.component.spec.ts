import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectPipeComponent } from './object-pipe.component';

describe('ObjectPipeComponent', () => {
  let component: ObjectPipeComponent;
  let fixture: ComponentFixture<ObjectPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObjectPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
