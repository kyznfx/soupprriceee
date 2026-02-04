/* =========================
   ELEMENT REFERENCES
========================= */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const crashBtn = document.getElementById("crashBtn");

const music = document.getElementById("bgMusic");
const yesOverlay = document.getElementById("yesOverlay");
const crashOverlay = document.getElementById("crashOverlay");
const recoverBtn = document.getElementById("recoverBtn");
const statusText = document.getElementById("statusText");

/* =========================
   YES BUTTON (MUSIC SAFE)
========================= */
yesBtn.addEventListener("click", () => {
  // play music INSIDE user click
  music.volume = 0.7;
  music.play().catch(() => {});

  // show celebration overlay
  yesOverlay.classList.add("show");
});

/* =========================
   HARD MODE NO BUTTON
========================= */
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

// If she somehow clicks NO
noBtn.addEventListener("click", () => {
  statusText.innerText = "That button is broken 😈";
});

/* =========================
   CRASH BUTTON (SAFE)
========================= */
crashBtn.addEventListener("click", () => {
  crashOverlay.classList.add("show");
  document.body.classList.add("shake");
});

/* =========================
   RECOVER BUTTON
========================= */
recoverBtn.addEventListener("click", () => {
  crashOverlay.classList.remove("show");
  document.body.classList.remove("shake");
});

/* =========================
   OPTIONAL: SCREEN SHAKE
========================= */
const style = document.createElement("style");
style.innerHTML = `
  .shake {
    animation: shake 0.1s infinite;
  }

  @keyframes shake {
    0% { transform: translate(0, 0); }
    25% { transform: translate(2px, -2px); }
    50% { transform: translate(-2px, 2px); }
    75% { transform: translate(2px, 2px); }
    100% { transform: translate(0, 0); }
  }
`;
document.head.appendChild(style);
