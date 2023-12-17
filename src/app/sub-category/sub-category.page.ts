import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.page.html',
  styleUrls: ['./sub-category.page.scss'],
})
export class SubCategoryPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  subCtaegoryDta=[
    {id:1 , name :'Oleax Watch',des:'The way of your fitness',img:'assets/22222222222222-removebg-preview.png',price:'1200'},
    {id:2 , name :'Oleax Watch',des:'The way of your fitness',img:'assets/22222222222222-removebg-preview.png',price:'1200'},
    {id:3 , name :'Oleax Watch',des:'The way of your fitness',img:'assets/22222222222222-removebg-preview.png',price:'1200'},
    {id:4 , name :'Oleax Watch',des:'The way of your fitness',img:'assets/22222222222222-removebg-preview.png',price:'1200'},
    {id:5 , name :'Oleax Watch',des:'The way of your fitness',img:'assets/22222222222222-removebg-preview.png',price:'1200'},
    ]

}
