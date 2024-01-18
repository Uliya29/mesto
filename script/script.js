let profile = document.querySelector('.profile');
let popup = document.querySelector('.popup');

let editButton = profile.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button')

function openPopup () {
  popup.classList.add('popup_opened')
}

function closePopup () {
  popup.classList.remove('popup_opened')
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);