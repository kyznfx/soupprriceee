const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const crashBtn = document.getElementById("crashBtn");
const recoverBtn = document.getElementById("recoverBtn");

const music = document.getElementById("bgMusic");
const yesOverlay = document.getElementById("yesOverlay");
const crashOverlay = document.getElementById("crashOverlay");
const statusText = document.getElementById("statusText");

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play().catch(() => {});
  yesOverlay.classList.add("show");
});

/* NO BUTTON (SMOOTH TROLL) */
let noCount = 0;
let isMoving = false;

noBtn.addEventListener("mouseenter", () => {
  if (isMoving) return;
  isMoving = true;

  noCount++;

  const card = document.querySelector(".card");
  const cardRect = card.getBoundingClientRect();

  const maxX = cardRect.width - noBtn.offsetWidth - 20;
  const maxY = cardRect.height - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  const messages = [
    "😏 nice try",
    "LOL nope",
    "why are you running?",
    "JUST CLICK YES 😡",
    "this button hates you"
  ];

  statusText.innerText =
    messages[Math.min(noCount, messages.length - 1)];

  setTimeout(() => {
    isMoving = false;
  }, 300);
});

/* CRASH BUTTON */
crashBtn.addEventListener("click", () => {
  crashOverlay.classList.add("show");
  document.body.classList.add("shake");
});

/* RECOVER BUTTON */
recoverBtn.addEventListener("click", () => {
  crashOverlay.classList.remove("show");
  document.body.classList.remove("shake");
});
