const tabButtons = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.content');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tabId = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove('active'));

    button.classList.add('active');

    tabContent.forEach((content) => content.classList.remove('active'));

    document.getElementById(tabId).classList.add('active');
  });
});

