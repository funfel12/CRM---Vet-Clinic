import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DicmedService } from '../../../../_services/_dicmed/dicmed.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';

@Component({
  selector: 'app-dicmed-add-dialog',
  templateUrl: './dicmed-add-dialog.component.html',
  styleUrls: ['./dicmed-add-dialog.component.css']
})
export class DicmedAddDialogComponent implements OnInit {
  public dialogRef: MatDialogRef<DicmedAddDialogComponent>

  constructor(private dialog: MatDialog, private services: DicmedService, private alertify: AlertifyService) {


  }
  model: any = {};

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }


  addMed() {
    var variable = this.services.add(this.model.dic_meds_name, Number(this.model.Price));

  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
