import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicmedComponent } from './dicmed.component';

describe('DicmedComponent', () => {
  let component: DicmedComponent;
  let fixture: ComponentFixture<DicmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
