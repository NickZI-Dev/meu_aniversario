document.addEventListener("DOMContentLoaded", function () {
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
