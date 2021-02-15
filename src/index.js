import './style.css';

import {
  openWeather,
  weatherButton
} from './modules/weather';

import loadContent from './modules/initial-load';

window.tempChoice = function() {
  const toggle = document.getElementById('toggle-input');
  const temp = document.getElementById('conversion');
  if (toggle.checked === true) {
    temp.innerHTML = 'F';
  } else {
    temp.innerHTML = 'C';
  }
}

function init() {
  loadContent();
}

init();
