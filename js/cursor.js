/* ============================================
   js/cursor.js
   Custom luxury cursor with magnetic ring
   ============================================ */

const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

/* Track mouse */
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
});

/* Smooth ring follow */
(function animateRing() {
  ringX += (mouseX - ringX - 16) * 0.12;
  ringY += (mouseY - ringY - 16) * 0.12;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
})();

/* Expand ring on interactive elements */
const interactiveEls = document.querySelectorAll('a, button, .col-card, .nav-icon');

interactiveEls.forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width   = '52px';
    cursorRing.style.height  = '52px';
    cursorRing.style.opacity = '0.4';
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.style.width   = '32px';
    cursorRing.style.height  = '32px';
    cursorRing.style.opacity = '0.6';
  });
});
