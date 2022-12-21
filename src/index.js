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

// get the score when user enter the date
submit.addEventListener('click', getScore);
// refresh button
refresh.addEventListener('click', getScore);

// refresh the score on page load
window.addEventListener('load', getScore);