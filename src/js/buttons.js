var burger = document.querySelector('.burger');
var closeBurger = document.querySelector('.aside__close-burger');
var aside = document.querySelector('.aside');

var mainWrapper = document.querySelector('.wrapper');

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
})

overlay.addEventListener('click', function () {
  modal[0].classList.remove('modal-feedback--show');
  modal[1].classList.remove('modal-feedback--show');
  aside.classList.remove('aside--show');
  overlay.style.display = "none";
})

//кнопки фидбека
var callbackBtn = document.querySelector('.callback-btn');
var modal = document.querySelectorAll('.modal-feedback');
var feedbackBtn = document.querySelector('.feedback-btn');

var closeFeedbackBtn = modal[0].querySelector('.button');
var closeCallbackBtn = modal[1].querySelector('.button')

var headerCallBtn = document.querySelector('.header__btn-call');
var headerChatBtn = document.querySelector('.header__btn-chat');

console.log(modal);

headerCallBtn.addEventListener('click', function (e) {
  if(modal[0].classList.contains('modal-feedback--show')){
    modal[0].classList.remove('modal-feedback--show');
  }
  aside.classList.remove('aside--show');
  overlay.style.display = "block";
  modal[1].classList.add('modal-feedback--show');
  e.stopPropagation();
})

headerChatBtn.addEventListener('click', function (e) {
  if(modal[1].classList.contains('modal-feedback--show')){
    modal[1].classList.remove('modal-feedback--show');
  }
  aside.classList.remove('aside--show');
  overlay.style.display = "block";
  modal[0].classList.add('modal-feedback--show');
  e.stopPropagation();
})

feedbackBtn.addEventListener('click', function () {
  if(modal[1].classList.contains('modal-feedback--show')){
    modal[1].classList.remove('modal-feedback--show');
  }
  aside.classList.remove('aside--show');
    modal[0].classList.add('modal-feedback--show');
  overlay.style.display = "block";
 })
closeFeedbackBtn.addEventListener('click', function (){
  modal[0].classList.remove('modal-feedback--show');
  if (!aside.classList.contains('aside--show')) {
    overlay.style.display = "none";
  }
})

callbackBtn.addEventListener('click', function () {
  if(modal[0].classList.contains('modal-feedback--show')){
    modal[0].classList.remove('modal-feedback--show');
  }
  aside.classList.remove('aside--show');
  overlay.style.display = "block";
  modal[1].classList.add('modal-feedback--show');
})

closeCallbackBtn.addEventListener('click', function (){
  modal[1].classList.remove('modal-feedback--show');
  if (!aside.classList.contains('aside--show')) {
    overlay.style.display = "none";
  }
})



//читать далее
var contentText = document.querySelector('.content__info');
var readMoreBtn = contentText.querySelector('.read-more__button');
var textContainer = contentText.querySelector('.content__text-container');
var readMoreImg = contentText.querySelector('.read-more__img');


readMoreBtn.addEventListener('click', function () {
  if (readMoreBtn.textContent === 'Читать далее') {
    textContainer.classList.add('content__text-container--show');
    readMoreBtn.textContent = 'Скрыть';
    readMoreImg.classList.add('rotate');
  } else if (readMoreBtn.textContent === 'Скрыть'){
    textContainer.classList.remove('content__text-container--show');
    readMoreBtn.textContent = 'Читать далее';
    readMoreImg.classList.remove('rotate');
  }
})

//показать бренды
var brandsSection = document.querySelector('.main__brands');
var brandShowMore = brandsSection.querySelector('.read-more__button');
var brandShowMoreImg = brandsSection.querySelector('.read-more__img');
var brandsShow = brandsSection.querySelector('.swiper-wrapper');

brandShowMore.addEventListener('click', function () {
  if (brandShowMore.textContent === 'Показать все') {
    brandsShow.classList.remove('swiper-wrapper--hidden');
    brandShowMore.textContent = 'Скрыть';
    brandShowMoreImg.classList.add('rotate');
  } else if (brandShowMore.textContent === 'Скрыть'){
    brandsShow.classList.add('swiper-wrapper--hidden');
    brandShowMore.textContent = 'Показать все';
    brandShowMoreImg.classList.remove('rotate');
  }
})

//показать технику
var techSection = document.querySelector('.main__tech');
var techShowMore = techSection.querySelector('.read-more__button');
var techShowMoreImg = techSection.querySelector('.read-more__img');
var techShow = techSection.querySelector('.swiper-wrapper');

techShowMore.addEventListener('click', function () {
  if (techShowMore.textContent === 'Показать все') {
    techShow.classList.remove('swiper-wrapper--hidden');
    techShowMore.textContent = 'Скрыть';
    techShowMoreImg.classList.add('rotate');
  } else if (techShowMore.textContent === 'Скрыть'){
    techShow.classList.add('swiper-wrapper--hidden');
    techShowMore.textContent = 'Показать все';
    techShowMoreImg.classList.remove('rotate');
  }
})

mainWrapper.addEventListener('click', function () {
  if (aside.classList.contains('aside--show') ||
    modal[0].classList.contains('modal-feedback--show') ||
    modal[1].classList.contains('modal-feedback--show')) {
    aside.classList.remove('aside--show');
    modal[0].classList.remove('modal-feedback--show');
    modal[1].classList.remove('modal-feedback--show');
    mainWrapper.style.opacity = 1;
  }

})

