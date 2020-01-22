import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatepoliceComponent } from './updatepolice.component';

describe('UpdatepoliceComponent', () => {
  let component: UpdatepoliceComponent;
  let fixture: ComponentFixture<UpdatepoliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatepoliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatepoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
