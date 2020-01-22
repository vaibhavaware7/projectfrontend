import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpcComponent } from './searchpc.component';

describe('SearchpcComponent', () => {
  let component: SearchpcComponent;
  let fixture: ComponentFixture<SearchpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
