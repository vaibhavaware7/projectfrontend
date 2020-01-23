import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddngpoComponent } from './addngpo.component';

describe('AddngpoComponent', () => {
  let component: AddngpoComponent;
  let fixture: ComponentFixture<AddngpoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddngpoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddngpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
