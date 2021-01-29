import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DicmedService } from '../../../../_services/_dicmed/dicmed.service';

@Component({
  selector: 'app-dicmed-edit-dialog',
  templateUrl: './dicmed-edit-dialog.component.html',
  styleUrls: ['./dicmed-edit-dialog.component.css']
})
export class DicmedEditDialogComponent implements OnInit {

  //public dialogRef: MatDialogRef<OwnerEditDialogComponent>

  dataFromMotherComponent: any;

  constructor(
    public dialogRef: MatDialogRef<DicmedEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private services: DicmedService,
    private dialog: MatDialog) {
    this.dataFromMotherComponent = data;
    console.log(this.dataFromMotherComponent.anyProperty.owner_first_name);

  }
  model: any = {};

  ngOnInit() {

  }


  editMed() {

    var variable = this.services.update(this.dataFromMotherComponent.anyProperty.Id, this.dataFromMotherComponent.anyProperty.dic_meds_name, this.dataFromMotherComponent.anyProperty.Price);

  }


  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
