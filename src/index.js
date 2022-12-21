import './style.css';

import getScore from './modules/loadData.js';
import newScore from './modules/newScores.js';

const submit = document.querySelector('#submit');
const refresh = document.querySelector('#refresh');

// submit the score to the api
submit.addEventListener('click', (e) => {
  e.preventDefault();
  newScore();
});

// refresh button
refresh.addEventListener('click', getScore);

// refresh the score on page load
window.addEventListener('load', getScore);