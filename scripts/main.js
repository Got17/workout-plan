import { allExercises } from './exercises.js';
import { createExerciseList } from './ui.js';

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.day-content');
const themeSwitcher = document.getElementById('themeSwitcher');

tabs.forEach(tab => {
  const day = tab.dataset.day;
  createExerciseList(day, allExercises[day]);

  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => c.style.display = 'none');
    document.getElementById(day).style.display = 'block';
  });
});

themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
