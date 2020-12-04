import { Component, OnInit } from '@angular/core';
import { ButtonRenderComponent } from '../_render/button-render/button-render.component';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  frameworkComponents: any;
  rowDataClicked1 = {};
  rowDataClicked2 = {};
  rowDataClicked3 = {};



  constructor() {
    this.frameworkComponents = {
      buttonRenderer: ButtonRenderComponent,
    }
  }


  ngOnInit() {
  }

  columnDefs = [
    {
      cellRendererParams: {
        onClick: this.onBtnClick1.bind(this),
        label: 'Edytuj'
      },
      headerName: 'Edytuj',
      cellRenderer: 'buttonRenderer',

    },
    {
      cellRendererParams: {
        onClick: this.onBtnClick2.bind(this),
        label: 'Usuń'
      },
      headerName: 'Usuń',
      cellRenderer: 'buttonRenderer',

    },
    {
      cellRendererParams: {
        onClick: this.onBtnClick3.bind(this),
        label: 'Przejdź'
      },
      headerName: 'Przejdź',
      cellRenderer: 'buttonRenderer'

    },
    { headerName: 'Id', field: 'Id' },
    { headerName: 'Data stworzenia', field: 'CreatedDate' },
    { headerName: 'Imię', field: 'owner_first_name' },
    { headerName: 'Nazwisko', field: 'owner_last_name' },
    { headerName: 'Ulica', field: 'owner_adress' },
    { headerName: 'Miasto', field: 'owner_city' },
    { headerName: 'Telefon', field: 'owner_telephone' },
    { headerName: 'Email', field: 'owner_email' }
  ];

  rowData = [
    { Id: '1', CreatedDate: '2020', owner_first_name: "Mateusz", owner_last_name: "as", owner_adress: "as", owner_city: "as", owner_telephone: "as", owner_email: "as"  },
    { Id: '2', CreatedDate: '2020', owner_first_name: "Mateusz", owner_last_name: "as", owner_adress: "as", owner_city: "as", owner_telephone: "as", owner_email: "as" },
    { Id: '3', CreatedDate: '2020', owner_first_name: "Mateusz", owner_last_name: "as", owner_adress: "as", owner_city: "as", owner_telephone: "as", owner_email: "as" }
  ];

  onBtnClick1(e) {
    this.rowDataClicked1 = e.rowData;
  }

  onBtnClick2(e) {
    this.rowDataClicked2 = e.rowData;
  }

  onBtnClick3(e) {
    this.rowDataClicked3 = e.rowData;
  }
}
