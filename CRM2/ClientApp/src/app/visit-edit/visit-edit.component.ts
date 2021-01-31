import { Component, OnInit } from '@angular/core';
import { VisitService } from '../_services/_visit/visit.service';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../_services/_alertify/alertify.service';
import { VetService } from '../_services/_vet/vet.service';

@Component({
  selector: 'app-visit-edit',
  templateUrl: './visit-edit.component.html',
  styleUrls: ['./visit-edit.component.css']
})
export class VisitEditComponent implements OnInit {


  veterinary = [];
  visitModel: any;
  visit: any;
  modeView: any;
  
    

  constructor(private visitService: VisitService, private routeRe: ActivatedRoute, private alertify: AlertifyService, private vetservice: VetService)
  {

    this.modeView = 'ser';

    //Ładowanie lekarzy
    this.vetservice.getAll().subscribe(next => {
      alertify.sucess("Załadowano lekarzy");
      this.veterinary = [];
      for (let i = 0; i < next.length; i++) {
        console.log(next[i].CreatedDate);
        this.veterinary.push(next[i]);
      }
      console.log(this.veterinary);
    }, error => {
      alertify.error("Wystąpił błąd załadowania lekarzy");
    });

    //Ładowanie wizyty
    this.routeRe.paramMap.subscribe(params => {
      this.visit = parseInt(params.get("visit"));
    })
    this.visitService.getByid(this.visit).subscribe(next => {
      this.alertify.sucess("Załadowano wizyte!");
      this.visitModel = next;
      console.log(next);
    });
    
  }

  editVisit() {
    this.visitService.update(this.visit, this.visitModel.med_visit_summary, this.visitModel.visit_category, this.visitModel.visit_notes, this.visitModel.visit_weight, this.visitModel.visit_date, this.visitModel.vet_id);
  }

  ngOnInit() {
  }

  changeModeView(modeView: string) {

    switch (modeView) {
      case 'ser':

        break;
      case 'med':
        break;
      case 'vac':
        break;

    }
    this.modeView = modeView;
  }

}
