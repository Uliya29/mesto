let body = document.querySelector('.body')
let profile = body.querySelector('.profile');
let popup = body.querySelector('.popup');
let formElement = popup.querySelector('.popup-container')

//Кнопки открытия и закрытия поп-апа
let editButton = profile.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');

let nameProfile = profile.querySelector('.profile__user-name');
let infoProfile = profile.querySelector('.profile__user-info');

  //Поля формы
  let nameInput = popup.querySelector('.popup__user-name');
  let infoInput = popup.querySelector('.popup__user-info');

function fillInTheFields () {
  nameInput.value = nameProfile.textContent;
  infoInput.value = infoProfile.textContent;
}
// Функция для открытия поп-апа присваивает классы - делает поп-ап видимым и убирает скролл страницы
function openPopup () {
  popup.classList.add('popup_opened');
  body.classList.add('body_no-scroll');
  fillInTheFields ();
}

//Функция для закрытия поп-апа удаляет присвоенные классы
function closePopup () {
  popup.classList.remove('popup_opened');
  body.classList.remove('body_no-scroll')
}

//Обработчик отправки формы (пока никуда не отправляется)
function formSubmitHandler (evt) {
  evt.preventDefault();//Отменяет стандартную отправку формы
  //Записывает значения полей ввода в элементы на странице
  nameProfile.textContent = nameInput.value;
  infoProfile.textContent = infoInput.value;
}

editButton.addEventListener('click', openPopup);//Обработчик запускает ф-ю при клике по кнопке редактирования профиля
formElement.addEventListener('submit', formSubmitHandler);//Обработчик запускает ф-ю при отправке формы
closeButton.addEventListener('click', closePopup);//Обработчик запускает ф-ю при клике по крестику
