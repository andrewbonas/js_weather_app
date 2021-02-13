import './style.css';

import Icon from './test.jpg';

import { openWeather } from './modules/weather';

function component() {
  const content = document.getElementById('content');
  const element = document.createElement('div');
  const myIcon = new Image();
  myIcon.src = Icon;
  // Lodash, now imported by this script
  element.innerHTML = 'hello';
  element.classList.add('hello');
  element.appendChild(myIcon);
  content.appendChild(element);
}

component();
