import { Component, OnInit, Inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AnimalService } from '../../../../_services/_animal/animal.service';



@Component({
  selector: 'app-animal-add-dialog',
  templateUrl: './animal-add-dialog.component.html',
  styleUrls: ['./animal-add-dialog.component.css']
})
export class AnimalAddDialogComponent implements OnInit {
  public dialogRef: MatDialogRef<AnimalAddDialogComponent>

  constructor(@Inject(MAT_DIALOG_DATA) public dialogBoxOwnerNumber, private dialog: MatDialog, private service: AnimalService) { }

  model: any = {};


  ngOnInit() {
    console.log(this.dialogBoxOwnerNumber.anyProperty);
   
  }

  addAnimal() {
    this.service.add(this.model.pet_name, this.model.pet_species, this.model.pet_breed, this.model.pet_sex, this.model.pet_color, this.dialogBoxOwnerNumber.anyProperty,this.model.pet_dob)
  }


  onNoClick(): void {
    this.dialogRef.close(true);
  }

}

