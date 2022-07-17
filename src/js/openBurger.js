var burger = document.querySelector('.burger');
var closeBurger = document.querySelector('.aside__close-burger');
var aside = document.querySelector('.aside');

var modal = document.querySelectorAll('.modal-feedback');
var overlay = document.querySelector('.overlay');
//открытие бургера

burger.addEventListener('click', function (e) {
  aside.classList.add('aside--show');
  modal[1].classList.remove('modal-feedback--show');
  modal[0].classList.remove('modal-feedback--show');
  overlay.style.display = "block";
  e.stopPropagation();
})
closeBurger.addEventListener('click', function () {
  aside.classList.remove('aside--show');
  overlay.style.display = "none";
});
document.addEventListener('keydown', function (e) {
  if (e.code === 'Escape') {
    aside.classList.remove('aside--show');
    overlay.style.display = "none";
  }
})
