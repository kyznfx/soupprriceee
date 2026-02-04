// YES button logic (music + transition)
function yesClicked() {
  const audio = new Audio("mp3.mp3");
  audio.play();

  document.body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
}

// NO button troll (runs away)
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 120);
    const y = Math.random() * (window.innerHeight - 60);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
  });
}

// Fake crash troll
function crashTroll() {
  document.body.style.animation = "shake 0.1s infinite";

  setTimeout(() => {
    document.body.innerHTML =
      "<h1 style='color:white;text-align:center;margin-top:20%'>💀 SYSTEM CRASHED 💀</h1>";
  }, 800);
}

// Floating hearts generator
const heartsContainer = document.querySelector(".hearts");

if (heartsContainer) {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}
