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

/* NO BUTTON (IMPOSSIBLE MODE) */
let noCount = 0;

noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 80);

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
