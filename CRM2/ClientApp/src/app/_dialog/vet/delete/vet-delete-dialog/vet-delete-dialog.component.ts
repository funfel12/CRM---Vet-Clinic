import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-vet-delete-dialog',
  templateUrl: './vet-delete-dialog.component.html',
  styleUrls: ['./vet-delete-dialog.component.css']
})
export class VetDeleteDialogComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxAcept: boolean, public dialog: MatDialog) { }

  ngOnInit() {
    this.dialogBoxAcept = false;
  }

  cheangeStatus() {
    this.dialogBoxAcept = true;
  }
}
