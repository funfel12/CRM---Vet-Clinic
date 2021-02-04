import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-service-delete-dialog',
  templateUrl: './service-delete-dialog.component.html',
  styleUrls: ['./service-delete-dialog.component.css']
})
export class ServiceDeleteDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }
}
