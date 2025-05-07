import { setupInputPersistence } from './storage.js';

export function createExerciseList(day, exercises) {
  const dayContent = document.getElementById(day);
  dayContent.innerHTML = '';

  const idsToPersist = [];

  exercises.forEach(exercise => {
    const nameKey = exercise.name.replace(/\s+/g, '');
    const repsId = `${day}${nameKey}Reps`;
    const setsId = `${day}${nameKey}Sets`;
    const weightId = `${day}${nameKey}Weight`;

    idsToPersist.push(repsId, setsId, weightId);

    const html = `
      <div class="workout"><strong>${exercise.name}</strong>
        <div class="inputs">
          <label>
            <input id="${repsId}" type="number" class="input-field" min="0"> <span>reps</span>
          </label>
          <label>
            <input id="${setsId}" type="number" class="input-field" min="0"> <span>sets</span>
          </label>
          <label>
            <input id="${weightId}" type="number" class="input-field" min="0"> <span>kg</span>
          </label>
        </div>
      </div>
    `;
    dayContent.insertAdjacentHTML('beforeend', html);
  });

  idsToPersist.forEach(setupInputPersistence);
}
