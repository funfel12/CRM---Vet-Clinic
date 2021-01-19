import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VetService } from '../../../../_services/_vet/vet.service';

@Component({
  selector: 'app-vet-edit-dialog',
  templateUrl: './vet-edit-dialog.component.html',
  styleUrls: ['./vet-edit-dialog.component.css']
})
export class VetEditDialogComponent implements OnInit {

  //public dialogRef: MatDialogRef<OwnerEditDialogComponent>

  dataFromMotherComponent: any;

  constructor(
    public dialogRef: MatDialogRef<VetEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private services: VetService,
    private dialog: MatDialog) {
    this.dataFromMotherComponent = data;
    console.log(this.dataFromMotherComponent.anyProperty.vet_name);

  }
  model: any = {};

  ngOnInit() {

  }


  editVet() {
    var variable = this.services.update(this.dataFromMotherComponent.anyProperty.Id, this.dataFromMotherComponent.anyProperty.vet_name, this.dataFromMotherComponent.anyProperty.vet_adress ,this.dataFromMotherComponent.anyProperty.vet_city, this.dataFromMotherComponent.anyProperty.vet_state, this.dataFromMotherComponent.anyProperty.vet_zip, this.dataFromMotherComponent.anyProperty.vet_phone, this.dataFromMotherComponent.anyProperty.vet_email, this.dataFromMotherComponent.anyProperty.vet_med_rec_site);

  }


  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
