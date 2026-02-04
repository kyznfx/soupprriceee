const music = document.getElementById("bgMusic");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const crashBtn = document.getElementById("crashBtn");
const statusText = document.getElementById("statusText");

let noAttempts = 0;

/* START MUSIC (browser-safe) */
yesBtn.addEventListener("click", () => {
  music.play();
  localStorage.setItem("musicTime", music.currentTime);

  document.body.style.opacity = 0;
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
});

/* HARD MODE NO BUTTON */
noBtn.addEventListener("mouseover", () => {
  noAttempts++;

  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 80);

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  statusText.innerText = [
    "😏 nice try",
    "LOL nope",
    "getting closer…",
    "why are you running?",
    "JUST CLICK YES 😡"
  ][Math.min(noAttempts, 4)];
});

/* If she somehow clicks NO */
noBtn.addEventListener("click", () => {
  document.body.classList.add("shake");
  statusText.innerText = "That button is broken 😈";
});

/* Fake crash */
crashBtn.addEventListener("click", () => {
  document.body.style.animation = "shake 0.1s infinite";
  setTimeout(() => {
    document.body.innerHTML =
      "<h1 style='margin-top:20%;text-align:center'>💀 SYSTEM FAILURE 💀</h1>";
  }, 900);
});

/* Particle hearts */
const particles = document.getElementById("particles");

setInterval(() => {
  const p = document.createElement("span");
  p.innerHTML = "💖";
  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = 3 + Math.random() * 4 + "s";
  particles.appendChild(p);

  setTimeout(() => p.remove(), 7000);
}, 250);
