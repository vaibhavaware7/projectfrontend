import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsearchComponent } from './ngsearch.component';

describe('NgsearchComponent', () => {
  let component: NgsearchComponent;
  let fixture: ComponentFixture<NgsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
