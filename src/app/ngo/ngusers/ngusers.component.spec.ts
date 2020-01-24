import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgusersComponent } from './ngusers.component';

describe('NgusersComponent', () => {
  let component: NgusersComponent;
  let fixture: ComponentFixture<NgusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
