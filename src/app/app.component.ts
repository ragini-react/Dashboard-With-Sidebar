import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'SideBar';
  index: number = 0;

  swiperConfig: SwiperOptions = {
    spaceBetween: 30,
    navigation: true,
    slidesPerView: 3,
  };

  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;

  ngAfterViewInit() {
    this.swiper.nativeElement.swiper.activeIndex = this.index;
  }

  slideChange(swiper: any) {
    this.index = swiper.detail[0].activeIndex;
  }
}
