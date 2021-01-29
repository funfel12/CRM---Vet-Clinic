import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicserviceAddComponent } from './dicservice-add.component';

describe('DicserviceAddComponent', () => {
  let component: DicserviceAddComponent;
  let fixture: ComponentFixture<DicserviceAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicserviceAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicserviceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
