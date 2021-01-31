import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';
import { Visit } from '../../_model/Visit';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
 export class VisitService {

  baseUrl = "http://localhost:49913/api/visit/"



  constructor(private http: HttpClient, private alertify: AlertifyService)
  {


  }

  get(idPet: number) {
    const url = `${this.baseUrl}get`;
    return this.http.post(url, {
      id: idPet
    }).pipe(map((data: any[]) =>
      data.map((item: any) => new Visit(item.id, item.createdDate, item.visit_date, item.visit_notes, item.med_visit_summary, item.visit_category, item.pet_id, item.vet_id)
      )
    )
    );
  }



  getByid(idVisit: number) {
    const url = `${this.baseUrl}getbyid`;
    return this.http.post(url, {
      id: idVisit
    }
    );
  }

  update(Id: number, med_visit_summary: string, visit_category: string, visit_notes: string, visit_weight: string, visit_date: string, vet_id: number)
  {
    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id:Id,
      med_visit_summary: med_visit_summary,
      visit_category: visit_category,
      visit_notes: visit_notes,
      visit_weight: visit_weight,
      visit_date: visit_date,
      vet_id: vet_id

    }).subscribe(next => {
      this.alertify.sucess("Zedytowano wizyte!");
    }, error => {
      this.alertify.error("Błąd edycjii wizyty!");
    });

  }


  add(visit_date: string, visit_notes: string, med_visit_summary: string, visit_category: string, pet_id: number, vet_id: number)
  {
    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      visit_date: visit_date ,
      visit_notes: visit_notes,
      med_visit_summary: med_visit_summary,
      visit_category: visit_category,
      pet_id: pet_id,
      vet_id: vet_id,
    }).subscribe(next => {
      this.alertify.sucess("Dodano wizyte!");
    }, error => {
      this.alertify.error("Błąd dodania wizyty!");
    });
  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`).subscribe(next => {
      this.alertify.error("Usunięto wizyte!");
    }, error => {
      this.alertify.error("Wystąpił błąd usuwania wizyty!");
    });
  }



}

