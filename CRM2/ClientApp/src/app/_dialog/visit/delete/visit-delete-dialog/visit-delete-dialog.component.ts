import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-visit-delete-dialog',
  templateUrl: './visit-delete-dialog.component.html',
  styleUrls: ['./visit-delete-dialog.component.css']
})
export class VisitDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }
}
