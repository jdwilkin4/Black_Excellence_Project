document.body.className = 'fade';
document.body.classList.add('fade');
document.addEventListener('DOMContentLoaded', () => {
  window.setTimeout(() => {
    document.body.className = '';
  }, 230);
});
