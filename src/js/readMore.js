//читать далее
var contentText = document.querySelector('.content__info');
var readMoreBtn = contentText.querySelector('.read-more__text');
var textContainer = contentText.querySelector('.content__text-container');
var readMoreImg = contentText.querySelector('.read-more__img');

readMoreBtn.addEventListener('click', function () {
  if (readMoreBtn.textContent === 'Читать далее') {
    textContainer.classList.add('read-more--show');
    readMoreBtn.textContent = 'Скрыть';
    readMoreImg.classList.add('rotate');
  } else if (readMoreBtn.textContent === 'Скрыть'){
    textContainer.classList.remove('read-more--show');
    readMoreBtn.textContent = 'Читать далее';
    readMoreImg.classList.remove('rotate');
  }
})


//показать бренды
var brandsSection = document.querySelector('.brands');
var brandShowMore = brandsSection.querySelector('.read-more__text');
var brandShowMoreImg = brandsSection.querySelector('.read-more__img');
var brandsShow = brandsSection.querySelector('.brands__wrapper');


brandShowMore.addEventListener('click', function () {
  if (brandShowMore.textContent === 'Показать все') {
    brandsShow.classList.add('read-more--show');
    brandShowMore.textContent = 'Скрыть';
    brandShowMoreImg.classList.add('rotate');
  } else if (brandShowMore.textContent === 'Скрыть'){
    brandsShow.classList.remove('read-more--show');
    brandShowMore.textContent = 'Показать все';
    brandShowMoreImg.classList.remove('rotate');
  }
})

//показать технику
var techSection = document.querySelector('.tech');
var techShowMore = techSection.querySelector('.read-more__text');
var techShowMoreImg = techSection.querySelector('.read-more__img');
var techShow = techSection.querySelector('.tech__wrapper');

techShowMore.addEventListener('click', function () {
  if (techShowMore.textContent === 'Показать все') {
    techShow.classList.add('read-more--show');
    techShowMore.textContent = 'Скрыть';
    techShowMoreImg.classList.add('rotate');
  } else if (techShowMore.textContent === 'Скрыть'){
    techShow.classList.remove('read-more--show');
    techShowMore.textContent = 'Показать все';
    techShowMoreImg.classList.remove('rotate');
  }
})


//попытка сделать делегирование событий, не пошло

/*var main = document.querySelector('.main')


main.addEventListener('click', function (e){
  let targetItem = e.target;
  let topElement = targetItem.closest('.read-more').previousSibling.previousSibling;
  let buttonImg = targetItem.parentElement.querySelector('.read-more__img');
  if (targetItem.closest('.read-more')){
    topElement.classList.toggle('read-more--show');
    buttonImg.classList.toggle('rotate');
    if (targetItem.textContent === 'Показать все' ||
      targetItem.textContent === 'Читать далее') {
      targetItem.textContent = 'Скрыть';
    } else
  }
})
*/

