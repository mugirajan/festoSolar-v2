import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (typeof $ !== 'undefined') {
        $('.slick-carousel').slick({
          slidesToShow: 1,
          arrows: true,
          dots: true,
          speed: 700,
          fade: true,
          cssEase: 'linear',
        });
      } else {
        console.warn('jQuery is not defined');
      }
    }
  }
}

