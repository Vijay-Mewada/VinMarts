import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { ApiService } from '../services/api.service';
// import SwiperCore, { Swiper } from 'swiper';
import SwiperCore, { Swiper } from 'swiper';
import { SwiperOptions, ThumbsEvents, ThumbsMethods, ThumbsOptions ,NavigationOptions } from 'swiper/types';
SwiperCore.use([]);
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('swiperContainer') swiperContainer: any;
  allCatagory: any;
  allBanners: any;
  
  swiper!: Swiper;
  mainSwiper!: Swiper;
  thumbnailSwiper!: Swiper;
  
  constructor(
    private api: ApiService,
    // private api: N,
  ) { 
    this.getAllCatagories();
    this.getAllBanners();
    this.initializeSwiper();
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.initializeSwiper();
      console.log('hello', this.thumbnailSwiper)
    }, 300);
  }

  ngOnInit() {
    // this.initializeSwiper();
  }

  initializeSwiper() {
    // if (this.swiperContainer && this.swiperContainer.nativeElement && !this.swiper) {
    //   this.swiper = new Swiper(this.swiperContainer.nativeElement, {
    //     loop: true,
    //     // Add other Swiper options here
    //   });
    
    //   console.log('yes===>', this.swiper, ' ========== ', this.swiperContainer)
    // }

     // Main Swiper options
     const mainSwiperOptions: SwiperOptions = {
      // Add your Main Swiper options here
      // For example:
      loop: true,
      autoplay: true,
      navigation: {
        nextEl: '.main-swiper-button-next',
        prevEl: '.main-swiper-button-prev',
      },
      // ...
    };

    // Thumbnail Swiper options
    const thumbnailSwiperOptions: SwiperOptions = {
      // Add your Thumbnail Swiper options here
      // For example:
      loop: true,
      slidesPerView: 'auto',
      freeMode: false, // Disable free mode scrolling
      allowTouchMove: false, // Disable touch/swipe interactions
      // ...
    };

    // Initialize Main Swiper with options
    this.mainSwiper = new Swiper('.main-swiper-container', mainSwiperOptions);

    // Initialize Thumbnail Swiper with options
    this.thumbnailSwiper = new Swiper('.thumbnail-swiper-container', thumbnailSwiperOptions);

    // Connect the Swipers for synchronization
    this.mainSwiper.controller.control = this.thumbnailSwiper;
    this.thumbnailSwiper.controller.control = this.mainSwiper;

    this.thumbnailSwiper.on('click', () => {
      // Get the active slide index in the thumbnail swiper
      const clickedIndex = this.thumbnailSwiper.clickedIndex;

      // Change the main swiper slide based on the clicked index
      if (clickedIndex !== undefined) {
        this.mainSwiper.slideTo(clickedIndex);
      }
    });

   

    
  
  }
  swiperModules = [IonicSlides];
  // @ViewChild('slider') slider: ;

  getAllCatagories(){
    this.api.getCatagories().subscribe((cat: any)=>{
      console.log('allCatagory', cat)
      this.allCatagory = cat.result;
    })
  }
  getAllBanners(){
    this.api.getBanners().subscribe((Banners: any)=>{
      console.log('allBanners', Banners)
      this.allBanners = Banners.result;
    })
  }
  // tabData1 = [
  //   { id: 1, name: 'Mobile', img: 'assets/phone.jpg' },
  //   { id: 2, name: 'Laptop', img: 'assets/laptop.jpg' },
  //   { id: 3, name: 'Fridge', img: 'assets/fridges.jpg' },
  //   { id: 4, name: 'Clothes', img: 'assets/clothes.jpg' },
  //   { id: 5, name: 'Watches', img: 'assets/watches.jpg' },
  //   { id: 6, name: 'Watches', img: 'assets/watches.jpg' },
  //   { id: 7, name: 'Watches', img: 'assets/watches.jpg' },
  //   { id: 8, name: 'Watches', img: 'assets/watches.jpg' },
  // ]

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

  changeSlide(index: any) {
    console.log(index)
    // Logic to change the slide based on the clicked thumbnail
    // Access the Swiper instance and change the active slide
    setTimeout(() => {
      if (this.swiper) {
        this.swiper.slideTo(index);
      }
    }, 100); // Adjust the delay if necessary
  }

}
