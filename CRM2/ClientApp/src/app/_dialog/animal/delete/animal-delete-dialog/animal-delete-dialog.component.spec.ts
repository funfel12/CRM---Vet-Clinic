import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalDeleteDialogComponent } from './animal-delete-dialog.component';

describe('AnimalDeleteDialogComponent', () => {
  let component: AnimalDeleteDialogComponent;
  let fixture: ComponentFixture<AnimalDeleteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalDeleteDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
