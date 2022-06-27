var overlay = document.querySelector('.overlay');
var aside = document.querySelector('.aside');
//кнопки фидбека
var callbackBtn = document.querySelector('.callback-btn');
var modal = document.querySelectorAll('.modal-feedback');
var feedbackBtn = document.querySelector('.feedback-btn');

var closeFeedbackBtn = modal[0].querySelector('.button');
var closeCallbackBtn = modal[1].querySelector('.button')

var headerCallBtn = document.querySelector('.header__btn-call');
var headerChatBtn = document.querySelector('.header__btn-chat');

//звонок в шапке
headerCallBtn.addEventListener('click', function (e) {
  modal[0].classList.remove('modal-feedback--show');
  aside.classList.remove('aside--show');
  overlay.style.display = "block";
  modal[1].classList.add('modal-feedback--show');
  e.stopPropagation();
})
//обратная связь в шапке
headerChatBtn.addEventListener('click', function (e) {
  modal[1].classList.remove('modal-feedback--show');
  aside.classList.remove('aside--show');
  overlay.style.display = "block";
  modal[0].classList.add('modal-feedback--show');
  e.stopPropagation();
})

//обратная связь
feedbackBtn.addEventListener('click', function () {
  modal[1].classList.remove('modal-feedback--show');
  aside.classList.remove('aside--show');
  modal[0].classList.add('modal-feedback--show');
  overlay.style.display = "block";
})
closeFeedbackBtn.addEventListener('click', function (){
  modal[0].classList.remove('modal-feedback--show');
  overlay.style.display = "none";
})

//заказать звонок
callbackBtn.addEventListener('click', function () {
  modal[0].classList.remove('modal-feedback--show');
  aside.classList.remove('aside--show');
  overlay.style.display = "block";
  modal[1].classList.add('modal-feedback--show');
})

closeCallbackBtn.addEventListener('click', function (){
  modal[1].classList.remove('modal-feedback--show');
  overlay.style.display = "none";
})
