import './style.css';

import {
  openWeather,
  weatherButton
} from './modules/weather';

import loadContent from './modules/initial-load';

function init() {
  loadContent();
}

init();
