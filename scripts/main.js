import { allExercises } from './exercises.js';
import { createExerciseList } from './ui.js';

const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.day-content');
const themeSwitcher = document.getElementById('themeSwitcher');

// Create all exercise lists
tabs.forEach(tab => {
  const day = tab.dataset.day;
  createExerciseList(day, allExercises[day]);
});

// Determine today's day string (e.g., 'monday', 'tuesday', etc.)
const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const today = new Date();
const todayDay = dayNames[today.getDay()];

// Find and activate the tab that matches today
const defaultTab = [...tabs].find(tab => tab.dataset.day === todayDay);
if (defaultTab) {
  defaultTab.classList.add('active');
  document.getElementById(todayDay).style.display = 'block';
} else {
  // Fallback: Show the first tab if no match
  tabs[0].classList.add('active');
  contents[0].style.display = 'block';
}

// Add click event listeners to tabs
tabs.forEach(tab => {
  const day = tab.dataset.day;
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => c.style.display = 'none');
    document.getElementById(day).style.display = 'block';
  });
});

// Theme switcher
themeSwitcher.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
