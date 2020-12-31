import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OwnerService } from '../../../../_services/_owner/owner.service';


@Component({
  selector: 'app-owner-edit-dialog',
  templateUrl: './owner-edit-dialog.component.html',
  styleUrls: ['./owner-edit-dialog.component.css']
})
export class OwnerEditDialogComponent implements OnInit {

 //public dialogRef: MatDialogRef<OwnerEditDialogComponent>

  dataFromMotherComponent: any;

  constructor(
    public dialogRef: MatDialogRef<OwnerEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private services: OwnerService,
    private dialog: MatDialog) {
    this.dataFromMotherComponent = data;
    console.log(this.dataFromMotherComponent.anyProperty.owner_first_name);

  }
  model: any = {};

  ngOnInit() {

  }


  editOwner() {
    var variable = this.services.update(this.dataFromMotherComponent.anyProperty.Id,this.dataFromMotherComponent.anyProperty.owner_first_name, this.dataFromMotherComponent.anyProperty.owner_last_name, this.dataFromMotherComponent.anyProperty.owner_adress, this.dataFromMotherComponent.anyProperty.owner_city, this.dataFromMotherComponent.anyProperty.owner_email, this.dataFromMotherComponent.anyProperty.owner_telephone);

  }


  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
