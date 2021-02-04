import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-vaccine-delete-dialog',
  templateUrl: './vaccine-delete-dialog.component.html',
  styleUrls: ['./vaccine-delete-dialog.component.css']
})
export class VaccineDeleteDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }
}
