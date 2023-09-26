import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css']
})
export class SwiperComponent {

  @Input() Data : any | undefined; 

  customOptions: OwlOptions = {
    loop: true,
    center: true,
    margin: 10,
    stagePadding: 20,
    items: 1,
    responsive: {
      0: {
        items: 1
      },
      578: {
        items: 2
      },
      740: {
        items: 3
      }
    },
    nav: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots:true,
    autoplay:true,
    navSpeed: 600,
    autoplaySpeed: 1000,

    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"]
  }
}
