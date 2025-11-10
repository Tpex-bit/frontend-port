document.addEventListener('DOMContentLoaded', () => {
  const icon = document.querySelector('.menu-icon');
  const menu = document.querySelector('.menu-options');

  icon.addEventListener('click', () => {
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });
});
