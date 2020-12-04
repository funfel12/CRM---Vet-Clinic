import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Owner } from '../../_model/Owner';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  baseUrl = "http://localhost:49913/api/owners/";
  //get
  //add
  //delete
  constructor(private http: HttpClient) {

 
  }
  getAll(id: number): Observable<Owner[]>
  {
    var numberValue = Number(id);
    const url = `${this.baseUrl}/get`;
    return this.http.post(url, {})
      .pipe(map((data: any[]) => data.map((item: any) => new Owner(item.Id, item.CreatedDate, item.owner_first_name, item.owner_last_name, item.owner_adress, item.owner_email, item.owner_telephone)
          )
        )
      );
  }

  add(owner_first_name: string, owner_last_name: string,
    owner_adress: string, owner_email: string, owner_telephone: string) {

    const url = `${this.baseUrl}/add`;
    return this.http.post(url, {
      owner_first_name: owner_first_name,
      owner_last_name: owner_last_name,
      owner_adtess: owner_adress,
      owner_email: owner_email,
      owner_telephone: owner_telephone
    }).subscribe();

  }

  delete(id: number){
    this.http.delete(`${this.baseUrl}/delete/${id}`)
      .subscribe();
  }

}
