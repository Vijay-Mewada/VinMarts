import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {


  addressData=[
    {id:1, text:'Deliver to my default address',addressOne:' Area colony , Bhopal',addressOTwo:'50 B ,E -1 Area colony Bhopal Madhya Pradesh 987457'},
    {id:2, text:'Deliver to my default address',addressOne:' Area colony , Bhopal',addressOTwo:'50 B ,E -1 Area colony Bhopal Madhya Pradesh 987457'},
   ]
   
  constructor() { }

  ngOnInit() {
  }

}
