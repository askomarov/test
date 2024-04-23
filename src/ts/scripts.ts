import 'swiper/css';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

const SLIDES_COUNT_TO_DISABLE_SLIDER = 4;
const BREAKPOINT_TO_DISABLE_SLIDER = 1440;
const heroSection: HTMLElement | null = document.querySelector('.hero');
const servicesSliderEl: HTMLElement | null =
document.querySelector(".hero-swiper");
if ( heroSection && servicesSliderEl) {
  const sliderButtonNext: HTMLElement | null = heroSection.querySelector(
    ".swiper__button--next"
  );
  const sliderButtonPrev: HTMLElement | null = heroSection.querySelector(
    ".swiper__button--prev"
  );
  const swiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 32,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    centeredSlides: true,
    pagination: {
      el: '.hero .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: sliderButtonNext,
      prevEl: sliderButtonPrev,
    },
  };


  const initSwiper = ()=>{
    const swiper = new Swiper('.hero-swiper', swiperOptions);
    return swiper;
  }
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
      initSwiper();
    });
  });
}
const reviewsSection: HTMLElement | null = document.querySelector('.reviews-section')
const reviewsSliderEl: HTMLElement | null =
document.querySelector(".reviews-swiper");

const revSliderCounts = reviewsSliderEl.querySelectorAll('.swiper-slide').length;
if (reviewsSection && reviewsSliderEl) {
  const revSliderButtonNext: HTMLElement | null = reviewsSection.querySelector(
    ".swiper__button--next"
  );
  const revSliderButtonPrev: HTMLElement | null = reviewsSection.querySelector(
    ".swiper__button--prev"
  );

  let swiperInstance;
  const revSwiperOptions: SwiperOptions = {
    modules: [Pagination, Navigation],
    spaceBetween: 23,
    slidesPerView: 1,
    loop: false,
    grabCursor: true,
    centeredSlides: false,
    pagination: {
      el: '.reviews-section .swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: revSliderButtonNext,
      prevEl: revSliderButtonPrev,
    },
    breakpoints:{
      768: {
        slidesPerView: 2,
      },
      1440:{
        slidesPerView: 3,
      }
    }
  };
  const initSwiper = ()=>{
    swiperInstance = new Swiper('.reviews-swiper', revSwiperOptions);
    return swiperInstance;
  }
  function disableSwiper() {
    swiperInstance.disable();
  }

  function enableSwiper() {
    if (revSliderCounts < SLIDES_COUNT_TO_DISABLE_SLIDER && window.innerWidth >= BREAKPOINT_TO_DISABLE_SLIDER) {
      swiperInstance.slideTo(0);
      disableSwiper();
      reviewsSliderEl?.classList.add('enable')
    } else {
      swiperInstance.enable();
      reviewsSliderEl?.classList.remove('enable')
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
      initSwiper();
      enableSwiper();
      console.log(revSliderCounts);

    });
  });
  window.addEventListener("resize", () => {
    enableSwiper();
  });
}

