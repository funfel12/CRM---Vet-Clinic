import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../_services/_animal/animal.service';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { AnimalAddDialogComponent } from '../_dialog/animal/add/animal-add-dialog/animal-add-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AnimalDeleteDialogComponent } from '../_dialog/animal/delete/animal-delete-dialog/animal-delete-dialog.component';


@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  animal: any;
  getAnimal: any;

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private serviceAnimal: AnimalService, private alertify: AlertifyService, private routeRe: Router )
  {
   
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.animal = parseInt(params.get("animal"));
    })

    //console.log("Id zwierzęcia:" + this.animal);
    this.serviceAnimal.get(this.animal).subscribe(next => {
      this.alertify.sucess("Załadowano zwierzęta!");
      this.getAnimal = next;
      console.log(next);
    }, error => {
      this.alertify.error("Błąd załadowania zwierzęta!");
    });
    
  }


  openDialogAdd(): void {
    let dialogRef = this.dialog.open(AnimalAddDialogComponent, {
      width: '700px',
      height: '40%',
      panelClass: 'custom-dialog',
      data: {
        anyProperty: this.animal
      }

    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  refresh() {

      this.serviceAnimal.get(this.animal).subscribe(next => {
      this.alertify.sucess("Załadowano zwierzęta!");
      this.getAnimal = next;
      console.log(next);
    }, error => {
      this.alertify.error("Błąd załadowania zwierzęta!");
    });

  }

  openDialogDelete(petid: any): void {
  
    let dialogRef = this.dialog.open(AnimalDeleteDialogComponent, {
      width: '700px',
      height: '25%',
      panelClass: 'custom-dialog'

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === undefined) {

      }
      else {
        console.log(petid);
        this.serviceAnimal.delete(petid);
        //this.service.delete(dialgBoxIdToDelete);

      }
    });

  }

  redirectToVisit(petid: any): void {
    this.routeRe.navigate(['/visit/' + petid]);
  }

}
