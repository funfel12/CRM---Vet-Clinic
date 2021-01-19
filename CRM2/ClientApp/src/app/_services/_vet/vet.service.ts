import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';
import { Vet } from '../../_model/Vet';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VetService {

  baseUrl = "http://localhost:49913/api/vet/";
  //get
  //add
  //delete
  constructor(private http: HttpClient, private alertify: AlertifyService) {


  }
  getAll(): Observable<Vet[]> {

    const url = `${this.baseUrl}get`;
    return this.http.post(url, {})
      .pipe(map((data: any[]) =>
        data.map((item: any) => new Vet(item.id, item.createdDate, item.vet_name, item.vet_adress, item.vet_city, item.vet_state, item.vet_zip, item.vet_phone, item.vet_email, item.vet_med_rec_site)
        )
      )
      );
  }
  add(vet_name: string, vet_adress: string,
    vet_city: string, vet_state: string, vet_zip: string, vet_phone: string, vet_email: string, vet_med_rec_site: string) {

    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      vet_name: vet_name,
      vet_adress: vet_adress,
      vet_city: vet_city,
      vet_state: vet_state,
      vet_zip: vet_zip,
      vet_phone: vet_phone,
      vet_email: vet_email,
      vet_med_rec_site: vet_med_rec_site

    }).subscribe(next => {
      this.alertify.sucess("Dodano użytkownika!");
    }, error => {
      this.alertify.error("Wystąpił błąd dodawania użytkownika!");
    });

  }
  update(Id: number, vet_name: string, vet_adress: string,
    vet_city: string, vet_state: string, vet_zip: string, vet_phone: string, vet_email: string, vet_med_rec_site: string) {

    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      vet_name: vet_name,
      vet_adress: vet_adress,
      vet_city: vet_city,
      vet_state: vet_state,
      vet_zip: vet_zip,
      vet_phone: vet_phone,
      vet_email: vet_email,
      vet_med_rec_site: vet_med_rec_site

    }).subscribe(next => {
      this.alertify.sucess("Edycja udana!");
    }, error => {
      this.alertify.error("Wystąpił błąd!");
    });

  }

  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`)
      .subscribe(next => {
        this.alertify.error("Usunięto użytkownika!");
      }, error => {
        this.alertify.error("Wystąpił błąd usuwania użytkownika!");
      });
  }
}
