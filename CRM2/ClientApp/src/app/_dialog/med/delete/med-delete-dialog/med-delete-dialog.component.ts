import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-med-delete-dialog',
  templateUrl: './med-delete-dialog.component.html',
  styleUrls: ['./med-delete-dialog.component.css']
})
export class MedDeleteDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }
}
