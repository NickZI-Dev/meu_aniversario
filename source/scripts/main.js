AOS.init();

document.addEventListener("DOMContentLoaded", function () {
  // Aba de prato principal/ Sobremesa / Bebidas
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function (button) {
      const targetTab = button.target.dataset.tabButton;
      const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
      hiddenTabs();
      hiddenUnderline();
      tab.classList.add("show-menu__list--is-active");
      button.target.classList.add("button--is-active");
    });
  }

  // Configurações da contagem regressiva da página

  const dataDoEvento = new Date("Aug 15, 2025 19:00:00");
  const timeStampDoEvento = dataDoEvento.getTime();

  const timeCount = setInterval(function () {
    const actual = new Date();
    const timeStampAtual = actual.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diasEmMs);
    const horasAteOEvento = Math.floor(
      (distanciaAteOEvento % diasEmMs) / horasEmMs
    );
    const minutosAteOEvento = Math.floor(
      (distanciaAteOEvento % horasEmMs) / minutosEmMs
    );
    const segundosAteOEvento = Math.floor(
      (distanciaAteOEvento % minutosEmMs) / 1000
    );

    document.querySelector(
      ".hero__count"
    ).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    document.getElementById("days").innerHTML = `${diasAteOEvento}d`;
    document.getElementById("hours").innerHTML = `${horasAteOEvento}h`;
    document.getElementById("minutes").innerHTML = `${minutosAteOEvento}m`;
    document.getElementById("seconds").innerHTML = `${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
      clearInterval(timeCount);
      document.querySelector(".hero__count").innerHTML = "Evento expirado";
    }
  }, 1000);

  const heroPage = document.querySelector(".hero");
  const heroHeight = heroPage.clientHeight;

  window.addEventListener("scroll", function () {
    const positionY = window.scrollY;

    if (positionY < heroHeight) {
      hiddenCount();
    } else {
      showCount();
    }
  });
});

function hiddenUnderline() {
  const buttons = document.querySelectorAll("[data-tab-button]");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("button--is-active");
  }
}

function hiddenTabs() {
  const tabContainer = document.querySelectorAll("[data-tab-id]");

  for (let i = 0; i < tabContainer.length; i++) {
    tabContainer[i].classList.remove("show-menu__list--is-active");
  }
}

function hiddenCount() {
  const heroCount = document.querySelector(".main__count");

  heroCount.classList.add("main__count--is-hidden");
}

function showCount() {
  const heroCount = document.querySelector(".main__count");

  heroCount.classList.remove("main__count--is-hidden");
}
