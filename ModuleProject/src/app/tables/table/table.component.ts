import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data = [
    {name: 'Furkan', age: 29, job:'Computer Engineer', employed: 'No'},
    {name: 'Zeynep', age: 25, job:'Biomedical Engineer', employed: 'No'},
    {name: 'Burak', age: 27, job:'Software Engineer', employed: 'Yes'}
  ]

  headers = [
    {key: 'employed', label:'Is he/she satisfied with his salary?'},
    {key: 'name', label:'Name Surname'},
    {key: 'age', label:'Age'},
    {key: 'job', label:'Job'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
