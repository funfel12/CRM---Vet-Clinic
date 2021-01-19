import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicserviceComponent } from './dicservice.component';

describe('DicserviceComponent', () => {
  let component: DicserviceComponent;
  let fixture: ComponentFixture<DicserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
