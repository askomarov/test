// Import SCSS
import '/scss/styles-faq.scss';

import { initAccordions } from "../ts/init-accordion";


window.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    initAccordions();
  });
});
