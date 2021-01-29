import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DicvaccineService } from '../../../../_services/_dicvaccine/dicvaccine.service';

@Component({
  selector: 'app-dicvaccine-edit-dialog',
  templateUrl: './dicvaccine-edit-dialog.component.html',
  styleUrls: ['./dicvaccine-edit-dialog.component.css']
})
export class DicvaccineEditDialogComponent implements OnInit {

  //public dialogRef: MatDialogRef<OwnerEditDialogComponent>

  dataFromMotherComponent: any;

  constructor(
    public dialogRef: MatDialogRef<DicvaccineEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private services: DicvaccineService,
    private dialog: MatDialog) {
    this.dataFromMotherComponent = data;


  }
  model: any = {};

  ngOnInit() {

  }


  editVaccine() {

    var variable = this.services.update(this.dataFromMotherComponent.anyProperty.Id, this.dataFromMotherComponent.anyProperty.dic_vaccines_name, Number(this.dataFromMotherComponent.anyProperty.Price));

  }


  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
