import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';
import { Observable } from 'rxjs';
import { Dicvaccine } from '../../_model/Dicvaccine';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DicvaccineService {

  baseUrl = "http://localhost:49913/api/dicvaccine/";

  constructor(private http: HttpClient, private alertify: AlertifyService) {
  }
  getAll(): Observable<Dicvaccine[]> {

    const url = `${this.baseUrl}get`;
    return this.http.post(url, {})
      .pipe(map((data: any[]) =>
        data.map((item: any) => new Dicvaccine(item.id, item.createdDate ,item.dic_vaccines_name, item.price)
        )
      )
      );
  }
  add(dic_vaccines_name: string, Price: number) {

    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      dic_vaccines_name: dic_vaccines_name,
      Price: Price
    }).subscribe(next => {
      this.alertify.sucess("Dodano szczepionke!");
    }, error => {
      this.alertify.error("Wystąpił błąd dodawania szczepionki!");
    });

  }
  update(Id: number, dic_vaccines_name: string, Price: number) {

    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      dic_vaccines_name: dic_vaccines_name,
      Price: Price
    }).subscribe(next => {
      this.alertify.sucess("Edycja udana!");
    }, error => {
      this.alertify.error("Wystąpił błąd!");
    });

  }
  delete(id: number) {
    this.http.delete(`${this.baseUrl}delete/${id}`)
      .subscribe(next => {
        this.alertify.error("Usunięto szczepionke!");
      }, error => {
        this.alertify.error("Wystąpił błąd usuwania szczepionki!");
      });
  }
}
