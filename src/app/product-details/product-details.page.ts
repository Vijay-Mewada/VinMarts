import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  swiperModules = [IonicSlides];

  sliders = [
    { id: 1, img: "assets/22222222222222-removebg-preview.png" },
    { id: 2, img: "assets/22222222222222-removebg-preview.png" },
    { id: 3, img: "assets/22222222222222-removebg-preview.png" },
    { id: 4, img: "assets/22222222222222-removebg-preview.png" },
    { id: 5, img: "assets/22222222222222-removebg-preview.png" },
  ]

  content = [
    { id: 1, title: 'Fire-Boltt Ninja Call Pro Smart Watch Dual Chip Bluetooth Calling, 1.69" Display, AI Voice Assistance with 100 Sports Modes, with SpO2 & Heart Rate Monitoring' }
  ]

  tabData5 = [
    { id: 1, product: "Fire-Bollt Watch" },
    // { id: 2, product: "Sunsilk Shampoo" },
    // { id: 3, product: "Fridge" },
    // { id: 4, product: "Watch" },
    // { id: 5, product: "Fire-Bollt Watch" },
    // { id: 6, product: "Fire-Bollt Watch" },
  ]

  priceofProduct = [
    { id: 1, price: "₹1020" },
    // {id: 1, price: "₹1020"},
    // {id: 1, price: "₹1020"},
    // {id: 1, price: "₹1020"},
  ]

  getProduct = [
    { id: 1, title: "You'll get your product by Dec 03, 2023 !" }
  ]

  deliverProduct = [
    { id: 1, userName: "Diksha Sharma", city: "Bhopal", pinCode: 111111 }
  ]

  reviews = [
    { id: 1, image:"assets/22222222222222-removebg-preview.png", userName: "Diksha Sharma", star: `<ion-icon name="star"></ion-icon>`, date: "1 Nov 2023", title: "This is a Review Title", review: "Well it's my 4th time to order this wonderful product. I'm just loving it that how beautifully it looks like awesome😊❤" },
    { id: 2, image:"assets/22222222222222-removebg-preview.png", userName: "Diksha Sharma", star: `<ion-icon name="star"></ion-icon>`, date: "1 Nov 2023", title: "This is a Review Title", review: "Well it's my 4th time to order this wonderful product. I'm just loving it that how beautifully it looks like awesome😊❤" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
