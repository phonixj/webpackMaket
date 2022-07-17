const readMore = document.querySelectorAll('.read-more');

readMore.forEach(function (item) {
  item.addEventListener('click', function () {
    let btnElem = item.previousElementSibling;
    btnElem.classList.toggle('read-more--show');
    let btnImg = item.querySelector('.read-more__img');
    btnImg.classList.toggle('read-more__img--rotate');
    item.classList.toggle('read-more--open');
  })
})
