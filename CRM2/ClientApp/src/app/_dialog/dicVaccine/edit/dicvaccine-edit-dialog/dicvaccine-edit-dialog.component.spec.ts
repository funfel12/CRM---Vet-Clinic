import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicvaccineEditDialogComponent } from './dicvaccine-edit-dialog.component';

describe('DicvaccineEditDialogComponent', () => {
  let component: DicvaccineEditDialogComponent;
  let fixture: ComponentFixture<DicvaccineEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicvaccineEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicvaccineEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
