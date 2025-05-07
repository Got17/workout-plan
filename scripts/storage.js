export function setupInputPersistence(id) {
    const input = document.getElementById(id);
    const saved = localStorage.getItem(id);
    if (saved !== null) input.value = saved;
  
    input.addEventListener('input', () => {
      localStorage.setItem(id, input.value);
    });
  }
  