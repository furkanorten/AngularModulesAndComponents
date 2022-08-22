import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists-home',
  templateUrl: './lists-home.component.html',
  styleUrls: ['./lists-home.component.css']
})
export class ListsHomeComponent implements OnInit {

  numbers = [
    {value: 50, label:'Customers'},
    {value: '3500$', label:'Profit'},
    {value: 65, label:'Comments'},
  ]

  images = [
    {
      image: '/assets/images/dresser.jpeg',
      title: 'Dresser',
      description: 'Dresser where you can put all your belongings'
    },
    {
      image: '/assets/images/couch.jpeg',
      title: 'Couch',
      description: 'Great comfortable couch'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
