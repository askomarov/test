import 'swiper/css';
import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

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
if (reviewsSection && reviewsSliderEl) {
  const revSliderButtonNext: HTMLElement | null = reviewsSection.querySelector(
    ".swiper__button--next"
  );
  const revSliderButtonPrev: HTMLElement | null = reviewsSection.querySelector(
    ".swiper__button--prev"
  );
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
    const swiper = new Swiper('.reviews-swiper', revSwiperOptions);
    return swiper;
  }
  window.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("load", () => {
      initSwiper();
    });
  });
}

