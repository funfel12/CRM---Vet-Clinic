import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicserviceDeleteComponent } from './dicservice-delete.component';

describe('DicserviceDeleteComponent', () => {
  let component: DicserviceDeleteComponent;
  let fixture: ComponentFixture<DicserviceDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicserviceDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicserviceDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
