function updateCountdown(id, targetDate) {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById(id).textContent = "Sınav başladı!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById(id).textContent =
    `${days} gün ${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function startCountdown() {
  const tytDate = new Date("2026-06-20T10:15:00").getTime();
  const aytDate = new Date("2026-06-21T10:15:00").getTime();

  setInterval(() => {
    updateCountdown("tyt", tytDate);
    updateCountdown("ayt", aytDate);
  }, 1000);
}

startCountdown();