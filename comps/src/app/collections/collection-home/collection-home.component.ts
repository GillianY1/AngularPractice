import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data = [
    {name:'Ace', age:'37', job:'designer'},
    {name:'Belle', age:'27', job:'engineer'},
    {name:'Carol', age:'33', job:'PM'}
  ];
  headers =[
    {key :'name', label:'Name'},
    {key :'age', label:'Age'},
    {key :'job', label:'Job'}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
