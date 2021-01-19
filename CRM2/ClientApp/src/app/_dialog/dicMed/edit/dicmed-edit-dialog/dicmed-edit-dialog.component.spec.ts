import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicmedEditDialogComponent } from './dicmed-edit-dialog.component';

describe('DicmedEditDialogComponent', () => {
  let component: DicmedEditDialogComponent;
  let fixture: ComponentFixture<DicmedEditDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicmedEditDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicmedEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
