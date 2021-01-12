import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-animal-delete-dialog',
  templateUrl: './animal-delete-dialog.component.html',
  styleUrls: ['./animal-delete-dialog.component.css']
})
export class AnimalDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }

}
