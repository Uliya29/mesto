let body = document.querySelector('.body')
let profile = body.querySelector('.profile');
let popup = body.querySelector('.popup');

let editButton = profile.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button')

function openPopup () {
  popup.classList.add('popup_opened');
  body.classList.add('body_no-scroll');
}

function closePopup () {
  popup.classList.remove('popup_opened');
  body.classList.remove('body_no-scroll')
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);