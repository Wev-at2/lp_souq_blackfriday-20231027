document.addEventListener("DOMContentLoaded", function () {
  // Seu código JavaScript aqui

  // Defina a data de término do countdown
  const endDate = new Date("2023-11-01 00:00:00").getTime();

  // Atualize o contador a cada segundo
  const countdown = document.getElementById("countdown");

  const timer = setInterval(function () {
    const now = new Date().getTime();
    const timeRemaining = endDate - now;

    if (timeRemaining <= 0) {
      clearInterval(timer);
      countdown.innerHTML = "Contagem regressiva encerrada!";
    } else {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  }, 1000);
});
