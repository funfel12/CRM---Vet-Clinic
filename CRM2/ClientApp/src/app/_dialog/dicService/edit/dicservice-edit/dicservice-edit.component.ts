import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DicserviceService } from '../../../../_services/_dicservice/dicservice.service';

@Component({
  selector: 'app-dicservice-edit',
  templateUrl: './dicservice-edit.component.html',
  styleUrls: ['./dicservice-edit.component.css']
})
export class DicserviceEditComponent implements OnInit {

  //public dialogRef: MatDialogRef<OwnerEditDialogComponent>

  dataFromMotherComponent: any;

  constructor(
    public dialogRef: MatDialogRef<DicserviceEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private services: DicserviceService,
    private dialog: MatDialog) {
    this.dataFromMotherComponent = data;
 

  }
  model: any = {};

  ngOnInit() {

  }


  editService() {

    var variable = this.services.update(this.dataFromMotherComponent.anyProperty.Id, this.dataFromMotherComponent.anyProperty.dic_services_name, Number(this.dataFromMotherComponent.anyProperty.Price));

  }


  onNoClick(): void {
    this.dialogRef.close(true);
  }

}
