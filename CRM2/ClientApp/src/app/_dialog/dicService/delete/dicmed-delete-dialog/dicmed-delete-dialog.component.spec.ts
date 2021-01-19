import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicmedDeleteDialogComponent } from './dicmed-delete-dialog.component';

describe('DicmedDeleteDialogComponent', () => {
  let component: DicmedDeleteDialogComponent;
  let fixture: ComponentFixture<DicmedDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicmedDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicmedDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
