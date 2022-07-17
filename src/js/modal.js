const overlay = document.querySelector('.overlay');
const aside = document.querySelector('.aside');
const openModal = document.querySelectorAll('.js-modal-open')
const closeModal = document.querySelectorAll('.js-modal-close');

openModal.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let modalId = item.getAttribute('data-modal');
    let modalElem = document.querySelector('.modal-feedback[data-modal="' + modalId + '"]');
    modalElem.classList.add('modal-feedback--show');
    let modalFocus = document.querySelector('.modal-feedback__input[data-modal="' + modalId + '"]');
    modalFocus.focus();
    aside.classList.remove('aside--show');
    overlay.style.display = "block";

    document.addEventListener('keydown', function (e) {
      if (e.code === 'Escape') {
        modalElem.classList.remove('modal-feedback--show');
        overlay.style.display = "none";
      }
    })
  })
})

closeModal.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    let parentModal = item.closest('.modal-feedback');
    parentModal.classList.remove('modal-feedback--show');
    overlay.style.display = "none";
  })
})
