const siteList = document.querySelector('.site-list');
const button = document.querySelector('.main-header__toggle');

button.addEventListener('click', () => {
  if(button.classList.contains('main-header__toggle--closed')) {
    siteList.style.display = 'block';
    button.classList.remove('main-header__toggle--closed');
    button.classList.add('main-header__toggle--opened');
  } else {
    siteList.style.display = 'none';
    button.classList.remove('main-header__toggle--opened');
    button.classList.add('main-header__toggle--closed');
  }
});