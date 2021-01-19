import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DicmedAddDialogComponent } from './dicmed-add-dialog.component';

describe('DicmedAddDialogComponent', () => {
  let component: DicmedAddDialogComponent;
  let fixture: ComponentFixture<DicmedAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DicmedAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DicmedAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
