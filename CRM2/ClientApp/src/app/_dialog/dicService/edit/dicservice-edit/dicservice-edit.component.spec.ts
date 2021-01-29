import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicserviceEditComponent } from './dicservice-edit.component';

describe('DicserviceEditComponent', () => {
  let component: DicserviceEditComponent;
  let fixture: ComponentFixture<DicserviceEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicserviceEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicserviceEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
