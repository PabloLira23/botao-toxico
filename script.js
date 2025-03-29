const button = document.getElementById('toggleButton');
const fixedSimButton = document.getElementById('fixedSimButton');
const displacement = 10 * 3.78;

function initPosition() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  button.style.left = (centerX - button.offsetWidth - 50) + "px";
  button.style.top = (centerY - button.offsetHeight / 2) + "px";
}

initPosition();

function getNewPosition() {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  let currentX = parseFloat(button.style.left) || 0;
  let currentY = parseFloat(button.style.top) || 0;

  let candidateX = currentX + (Math.random() > 0.5 ? displacement : -displacement);
  let candidateY = currentY + (Math.random() > 0.5 ? displacement : -displacement);

  if (candidateX < 0) candidateX = currentX + displacement;
  if (candidateX > maxX) candidateX = currentX - displacement;
  if (candidateY < 0) candidateY = currentY + displacement;
  if (candidateY > maxY) candidateY = currentY - displacement;

  candidateX = Math.max(0, Math.min(candidateX, maxX));
  candidateY = Math.max(0, Math.min(candidateY, maxY));

  return { x: candidateX, y: candidateY };
}

function updatePosition() {
  const { x, y } = getNewPosition();
  button.style.left = x + "px";
  button.style.top = y + "px";
}

button.addEventListener('click', () => {
  button.textContent = "Por que não?";
  updatePosition();
});

fixedSimButton.addEventListener('click', () => {
  window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});

window.addEventListener('resize', () => {
  const { x, y } = getNewPosition();
  button.style.left = x + "px";
  button.style.top = y + "px";
});
