const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// const ChangeTemeObj = {
//   themeEvent: document.querySelector('.theme-switch__toggle'),
//   body: document.querySelector('body'),
// }

const themeEvent = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
localStorage.getItem('theme') === null ? body.classList.add(Theme.LIGHT) : body.classList.value = localStorage.getItem('theme');

if (body.classList.value === Theme.DARK) {
  themeEvent.checked = true
}

themeEvent.addEventListener('click', changeTheme);

function changeTheme() {
  const { LIGHT, DARK } = Theme;
  // localStorage.clear
  localStorage.removeItem('theme');
  body.classList.toggle(DARK);
  body.classList.toggle(LIGHT);
  localStorage.setItem('theme', body.classList.value)
}
