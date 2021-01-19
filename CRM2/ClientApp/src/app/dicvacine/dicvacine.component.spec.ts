import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicvacineComponent } from './dicvacine.component';

describe('DicvacineComponent', () => {
  let component: DicvacineComponent;
  let fixture: ComponentFixture<DicvacineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicvacineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicvacineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
