import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  swiperModules = [IonicSlides];

  constructor() { }


  tabData1 = [
    { id: 1, name: 'Mobile', img: 'assets/images/phone.jpg' },
    { id: 2, name: 'Laptop', img: 'assets/images/laptop.jpg' },
    { id: 3, name: 'Fridge', img: 'assets/images/fridges.jpg' },
    { id: 4, name: 'Clothes', img: 'assets/images/clothes.jpg' },
    { id: 5, name: 'Watches', img: 'assets/images/watches.jpg' },
    { id: 6, name: 'Watches', img: 'assets/images/watches.jpg' },
    { id: 7, name: 'Watches', img: 'assets/images/watches.jpg' },
    { id: 8, name: 'Watches', img: 'assets/images/watches.jpg' },
  ]

  tabData2 = [
    { id: 1, img: 'assets/images/carousal3.jpg' },
    { id: 2, img: 'assets/images/carousal1.jpg' },
    { id: 3, img: 'assets/images/carousal4.jpg' },
    { id: 4, img: 'assets/images/carousal1.jpg' },
    { id: 5, img: 'assets/images/carousal3.jpg' },
    { id: 6, img: 'assets/images/carousal1.jpg' },
    { id: 7, img: 'assets/images/carousal4.jpg' },
    { id: 8, img: 'assets/images/carousal1.jpg' },
  ]

  tabData3 = [
    { id: 1, img: 'assets/images/shampoo.jpg' },
    { id: 2, img: 'assets/images/smart-watch.jpg' },
    { id: 3, img: 'assets/images/phone.jpg' },
    { id: 4, img: 'assets/images/fridges.jpg' },
    { id: 5, img: 'assets/images/lappy.png' },
    { id: 6, img: 'assets/images/sunsilk.jpg' },
    { id: 7, img: 'assets/images/laptop.jpg' },
    { id: 8, img: 'assets/images/shampoo.jpg' },
  ]

  tabData4 = [
    { id: 1, img: 'assets/images/smart-watch.jpg' },
    { id: 2, img: 'assets/images/lappy.png' },
    { id: 3, img: 'assets/images/phone.jpg' },
    { id: 4, img: 'assets/images/fridges.jpg' },
    { id: 5, img: 'assets/images/lappy.png' },
    { id: 6, img: 'assets/images/sunsilk.jpg' },
    { id: 7, img: 'assets/images/laptop.jpg' },
    { id: 8, img: 'assets/images/shampoo.jpg' },
  ]



}
