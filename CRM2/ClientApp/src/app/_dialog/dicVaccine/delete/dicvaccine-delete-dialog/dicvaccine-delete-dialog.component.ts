import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dicvaccine-delete-dialog',
  templateUrl: './dicvaccine-delete-dialog.component.html',
  styleUrls: ['./dicvaccine-delete-dialog.component.css']
})
export class DicvaccineDeleteDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }



}
