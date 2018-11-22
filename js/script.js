'use strict';
var showModal = function () {
  return function (event) {
    console.log('show modal')
    event.preventDefault();
    var allModals = document.querySelectorAll('.modal');
    for (var i = 0; i < allModals.length; i++) {
      allModals[i].classList.remove('show');
    }
    //document.querySelector(href).classList.add('show');
    console.log(this)
    document.querySelector('#modal-overlay').classList.add('show');
  };
}

var modalLinks = document.querySelectorAll('.show-modal');
console.log('modalLinks', modalLinks)
for (var i = 0; i < modalLinks.length; i++) {
  modalLinks[i].addEventListener('click', showModal);
}

var hideModal = function (event) {
  event.preventDefault();
  document.querySelector('#modal-overlay').classList.remove('show');
};

var closeButtons = document.querySelectorAll('.modal .close');
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener('click', hideModal);
}

document.querySelector('#modal-overlay').addEventListener('click', hideModal);
var modals = document.querySelectorAll('.modal');
for (var i = 0; i < modals.length; i++) {
  modals[i].addEventListener('click', function (event) {
    event.stopPropagation();
  });
}
