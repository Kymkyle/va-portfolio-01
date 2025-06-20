import { disableImageDragging, blockDevToolsShortcuts, handlePreloader } from '../utils/shared.js';

disableImageDragging();
blockDevToolsShortcuts();
handlePreloader(); // Optionally pass custom IDs or class names

const arrow = document.querySelector('.big-arrow');
if (arrow) {
  arrow.addEventListener('click', () => {
    const target = document.getElementById('B00001');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
}