import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { DicserviceService } from '../../../../_services/_dicservice/dicservice.service';
import { AlertifyService } from '../../../../_services/_alertify/alertify.service';
import { DicvaccineService } from '../../../../_services/_dicvaccine/dicvaccine.service';

@Component({
  selector: 'app-dicvaccine-add-dialog',
  templateUrl: './dicvaccine-add-dialog.component.html',
  styleUrls: ['./dicvaccine-add-dialog.component.css']
})
export class DicvaccineAddDialogComponent implements OnInit {
  public dialogRef: MatDialogRef<DicvaccineAddDialogComponent>

  constructor(private dialog: MatDialog, private services: DicvaccineService, private alertify: AlertifyService) {


  }
  model: any = {};

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  addVaccine() {
    var variable = this.services.add(this.model.dic_vaccines_name, Number(this.model.Price));

  }
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
