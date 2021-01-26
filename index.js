/* eslint-disable no-unused-expressions */
/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */

// fadin for homepage title
const el = document.getElementById('home-title');

const fadeIn = (el, time) => {
  el.style.opacity = 0;

  let last = +new Date();
  const tick = () => {
    el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    last = +new Date();

    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    }
  };

  tick();
};

fadeIn(el, 5000);
