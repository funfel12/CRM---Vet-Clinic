import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicvaccineAddDialogComponent } from './dicvaccine-add-dialog.component';

describe('DicvaccineAddDialogComponent', () => {
  let component: DicvaccineAddDialogComponent;
  let fixture: ComponentFixture<DicvaccineAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicvaccineAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicvaccineAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
