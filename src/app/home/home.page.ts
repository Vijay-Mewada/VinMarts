import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  ngOnInit() {
  }
  swiperModules = [IonicSlides];

  constructor() { }


  tabData1 = [
    { id: 1, name: 'Mobile', img: 'assets/phone.jpg' },
    { id: 2, name: 'Laptop', img: 'assets/laptop.jpg' },
    { id: 3, name: 'Fridge', img: 'assets/fridges.jpg' },
    { id: 4, name: 'Clothes', img: 'assets/clothes.jpg' },
    { id: 5, name: 'Watches', img: 'assets/watches.jpg' },
    { id: 6, name: 'Watches', img: 'assets/watches.jpg' },
    { id: 7, name: 'Watches', img: 'assets/watches.jpg' },
    { id: 8, name: 'Watches', img: 'assets/watches.jpg' },
  ]

  tabData2 = [
    { id: 1, img: 'assets/carousal3.jpg' },
    { id: 2, img: 'assets/mobile.jpg' },
    { id: 3, img: 'assets/carousal4.jpg' },
    { id: 4, img: 'assets/mobile.jpg' },
    { id: 5, img: 'assets/carousal3.jpg' },
    { id: 6, img: 'assets/mobile.jpg' },
    { id: 7, img: 'assets/carousal4.jpg' },
    { id: 8, img: 'assets/mobile.jpg' },
  ]

  tabData3 = [
    { id: 1, img: 'assets/shampoo.jpg' },
    { id: 2, img: 'assets/smart-watch.jpg' },
    { id: 3, img: 'assets/phone.jpg' },
    { id: 4, img: 'assets/fridges.jpg' },
    { id: 5, img: 'assets/lappy.png' },
    { id: 6, img: 'assets/sunsilk.jpg' },
    { id: 7, img: 'assets/laptop.jpg' },
    { id: 8, img: 'assets/shampoo.jpg' },
  ]

  tabData4 = [
    { id: 1, img: 'assets/smart-watch.jpg' },
    { id: 2, img: 'assets/lappy.png' },
    { id: 3, img: 'assets/phone.jpg' },
    { id: 4, img: 'assets/fridges.jpg' },
    { id: 5, img: 'assets/lappy.png' },
    { id: 6, img: 'assets/sunsilk.jpg' },
    { id: 7, img: 'assets/laptop.jpg' },
    { id: 8, img: 'assets/shampoo.jpg' },
  ]



}
