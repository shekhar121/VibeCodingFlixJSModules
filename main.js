// assets/js/main.js
import { createHeader } from './js/header.js';
import { createToggle } from './js/toggle.js';
import { createCarousel } from './js/carousel.js';
import { createTopMovies } from './js/top-movies.js';
import { createTopTV } from './js/top-tv.js';
import { createTopAction } from './js/top-action.js';
import { createFooter } from './js/footer.js';


document.addEventListener('DOMContentLoaded', () => {
  const header = createHeader();
  document.getElementById('app-header').appendChild(header);

  const toggle = createToggle();
  document.getElementById('app-toggle').appendChild(toggle);

  const carousel = createCarousel();
  document.getElementById('app-carousel').appendChild(carousel);

  const topMovies = createTopMovies();
  document.getElementById('app-top-movies').appendChild(topMovies);

  const topTV = createTopTV();
  document.getElementById('app-top-tv').appendChild(topTV);

  const topAction = createTopAction();
  document.getElementById('app-top-action').appendChild(topAction);

  const footer = createFooter();
  document.getElementById('app-footer').appendChild(footer);
});