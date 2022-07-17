var overlay = document.querySelector('.overlay');
var aside = document.querySelector('.aside');
var modal = document.querySelectorAll('.modal-feedback');

overlay.addEventListener('click', function (e) {
  if (e.defaultPrevented) return;
  modal[0].classList.remove('modal-feedback--show');
  modal[1].classList.remove('modal-feedback--show');
  aside.classList.remove('aside--show');
  overlay.style.display = "none";
})
