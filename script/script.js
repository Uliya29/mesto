const profile = document.querySelector('.profile');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');

//Кнопки открытия и закрытия поп-апа
const editButton = profile.querySelector('.profile__edit-button');
const closeButton = popup.querySelector('.popup__close-button');

//Информация о пользователе
const nameProfile = profile.querySelector('.profile__user-name');
const infoProfile = profile.querySelector('.profile__user-info');

//Поля формы
const nameInput = popup.querySelector('.popup__user-name');
const infoInput = popup.querySelector('.popup__user-info');

const saveFormButton = popup.querySelector('.popup__save-button');

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
  body.classList.remove('body_no-scroll');
}
//Функция для сохранения данных введённых в форму
//Обработчик отправки формы (пока никуда не отправляется)
function formSubmitHandler (evt) {
  evt.preventDefault();//Отменяет стандартную отправку формы
  //Записывает значения полей ввода в элементы на странице
  nameProfile.textContent = nameInput.value;
  infoProfile.textContent = infoInput.value;
  closePopup ();
}

editButton.addEventListener('click', openPopup);//Обработчик запускает ф-ю при клике по кнопке редактирования профиля
closeButton.addEventListener('click', closePopup);//Обработчик запускает ф-ю при клике по крестику
formElement.addEventListener('submit', formSubmitHandler);//Обработчик запускает ф-ю при отправке формы