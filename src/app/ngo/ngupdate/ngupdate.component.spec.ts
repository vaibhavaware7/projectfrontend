import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgupdateComponent } from './ngupdate.component';

describe('NgupdateComponent', () => {
  let component: NgupdateComponent;
  let fixture: ComponentFixture<NgupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
