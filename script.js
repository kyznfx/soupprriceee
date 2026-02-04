const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const crashBtn = document.getElementById("crashBtn");
const music = document.getElementById("bgMusic");
const overlay = document.getElementById("yesOverlay");
const statusText = document.getElementById("statusText");

let noCount = 0;

/* ✅ YES BUTTON — MUSIC PLAYS HERE */
yesBtn.addEventListener("click", () => {
  music.volume = 0.7;
  music.play(); // <-- THIS is why it works

  overlay.classList.add("show");
});

/* 😈 HARD MODE NO BUTTON */
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

  statusText.innerText = messages[Math.min(noCount, messages.length - 1)];
});

/* 💀 CRASH TROLL */
crashBtn.addEventListener("click", () => {
  document.body.innerHTML =
    "<h1 style='margin-top:20%;text-align:center'>💀 SYSTEM FAILURE 💀</h1>";
});
