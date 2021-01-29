import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertifyService } from '../_alertify/alertify.service';
import { Dicvaccine } from '../../_model/Dicvaccine';
import { Dicservice } from '../../_model/Dicservice';
import { Observable } from 'rxjs';
import { Dicmed } from '../../_model/Dicmed';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DicmedService {

  baseUrl = "http://localhost:49913/api/Dicmed/";

  constructor(private http: HttpClient, private alertify: AlertifyService) {


  }
  getAll(): Observable<Dicmed[]> {

    const url = `${this.baseUrl}get`;
    return this.http.post(url, {})
      .pipe(map((data: any[]) =>
        data.map((item: any) => new Dicmed(item.id, item.createdDate, item.dic_meds_name, item.price)
        )
      )
      );


  }

  add(dic_meds_name: string, Price: number) {

    const url = `${this.baseUrl}add`;
    return this.http.post(url, {
      dic_meds_name: dic_meds_name,
      Price: Price
    }).subscribe(next => {
      this.alertify.sucess("Dodano medykament!");
    }, error => {
      this.alertify.error("Wystąpił błąd dodawania medykamentu!");
    });

  }


  update(Id: number, dic_meds_name: string, Price: number) {

    const url = `${this.baseUrl}update`;
    return this.http.post(url, {
      Id: Id,
      dic_meds_name: dic_meds_name,
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
        this.alertify.error("Usunięto medykament!");
      }, error => {
        this.alertify.error("Wystąpił błąd usuwania medykamentu!");
      });
  }
}
