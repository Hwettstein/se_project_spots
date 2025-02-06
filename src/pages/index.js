import "./index.css";
import {
  enableValidation,
  settings,
  resetValidation,
} from "../scripts/validation.js";
import Api from "../utils/Api.js";

// const initialCards = [
//   {
//     name: "Griffin Wooldridge",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
//     altText: "Red Bridge",
//   },
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//     altText: "Snowy cabin",
//   },
//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//     altText: "Sunny tunnel",
//   },
//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//     altText: "Bridge over forest",
//   },
//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//     altText: "Cafe tables with customers",
//   },
//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//     altText: "Resturant facade",
//   },
//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//     altText: "Mountain viewed through a window",
//   },
// ];

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "37309af3-a3c3-4534-8668-174c6090eeea",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, userInfo]) => {
    cards.forEach((card) => {
      const cardElement = getCardElement(card);
      cardList.append(cardElement);
    });

    profileName.textContent = userInfo.name;
    profileDescription.textContent = userInfo.about;
    userAvatar.src = userInfo.avatar;

    console.log(userInfo.name, userInfo.about, userInfo.avatar);
  })
  .catch((err) => console.error("Failed to load app data:", err));

const profileEditBtn = document.querySelector(".profile__edit-btn");
const cardModalBtn = document.querySelector(".profile__add-card");
const avatarModalBtn = document.querySelector(".profile__avatar-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const userAvatar = document.querySelector(".profile__avatar");

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector("#edit-profile");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalSubmitBtn = editModal.querySelector(".modal__submit-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const cardModal = document.querySelector("#card-modal");
const cardModalCloseBtn = cardModal.querySelector(".modal__close-btn");
const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");
const cardForm = cardModal.querySelector(".modal__form");
const cardLinkInput = cardModal.querySelector("#add-card-link");
const cardNameInput = cardModal.querySelector("#add-card-name");

const previewModal = document.querySelector("#preview-image");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");
const previewModalImageElement = previewModal.querySelector(".modal__image");
const previewModalDescElement = previewModal.querySelector(".modal__desc");

const avatarModal = document.querySelector("#avatar-modal");
const avatarForm = avatarModal.querySelector(".modal__form");
const avatarSubmitBtn = avatarModal.querySelector(".modal__submit-btn");
const avatarModalCloseBtn = avatarModal.querySelector(".modal__close-btn");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");

const deleteModal = document.querySelector("#delete-modal");
const deleteForm = deleteModal.querySelector(".modal__form");

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

let selectedCard, selectedCardId;

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameElement = cardElement.querySelector(".card__title");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

  cardNameElement.textContent = data.name;
  cardImageElement.src = data.link;
  cardImageElement.alt = data.altText;

  cardLikeBtn.addEventListener("click", () => {
    cardLikeBtn.classList.toggle("card__like-button_liked");
  });

  cardDeleteBtn.addEventListener("click", (evt) => {
    handleDeleteCard(cardElement, data._id);
  });

  cardImageElement.addEventListener("click", () => {
    openModal(previewModal);
    previewModalDescElement.textContent = data.name;
    previewModalImageElement.src = data.link;
    previewModalImageElement.alt = data.altText;
  });

  return cardElement;
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", handleEscKeyPress);
  modal.addEventListener("click", closeModalOverlay);
  modal.addEventListener("keydown", handleEnterKeyPress);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleEscKeyPress);
  modal.removeEventListener("click", closeModalOverlay);
  modal.removeEventListener("keydown", handleEnterKeyPress);
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error);
}

function handleDeleteCard(cardElement, cardId) {
  selectedCard = cardElement;
  selectedCardId = cardId;
  openModal(deleteModal);
}

function disableButton(button, settings) {
  button.disabled = true;
}

function handleEnterKeyPress(evt) {
  if (evt.key === "Enter") {
    const activeModal = document.querySelector(".modal_opened");

    if (activeModal === editModal) {
      handleEditFormSubmit(evt);
    } else if (activeModal === cardModal) {
      handleCardSubmit(evt);
    }
  }
}

function handleEscKeyPress(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
}

function closeModalOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      closeModal(editModal);
      editFormElement.reset();
      disableButton(editModalSubmitBtn, settings);
    })
    .catch(console.error);
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const inputValues = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  const cardElement = getCardElement(inputValues);
  cardList.prepend(cardElement);
  closeModal(cardModal);
  cardForm.reset();
  disableButton(cardSubmitBtn, settings);
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  api
    .editAvatarInfo(avatarInput.value)
    .then((data) => {
      userAvatar.src = data.avatar;
      closeModal(avatarModal);
      avatarForm.reset();
      disableButton(avatarSubmitBtn, settings);
    })
    .catch(console.error);
}

profileEditBtn.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editFormElement,
    [editModalNameInput, editModalDescriptionInput],
    settings
  );
  openModal(editModal);
});

editModalCloseBtn.addEventListener("click", () => {
  closeModal(editModal);
});

cardModalBtn.addEventListener("click", () => {
  openModal(cardModal);
});
cardModalCloseBtn.addEventListener("click", () => {
  closeModal(cardModal);
});
previewModalCloseBtn.addEventListener("click", () => {
  closeModal(previewModal);
});

avatarForm.addEventListener("submit", handleAvatarSubmit);
avatarModalBtn.addEventListener("click", () => {
  openModal(avatarModal);
});
avatarModalCloseBtn.addEventListener("click", () => {
  closeModal(avatarModal);
});

deleteForm.addEventListener("submit", handleDeleteSubmit);

editFormElement.addEventListener("submit", handleEditFormSubmit);
cardForm.addEventListener("submit", handleCardSubmit);

enableValidation(settings);
