import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const arrayOfMarkup = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  arrayOfMarkup.push(
    `<li class="gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
            <img class="gallery__image" src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}" />
        </a>
    </li>`
  );
}

galleryEl.innerHTML = arrayOfMarkup.join("");

let instance = "";

galleryEl.addEventListener("click", openModalOnclickPicture);

function openModalOnclickPicture(e) {
  e.preventDefault();
  if (e.target.tagName === "IMG") {
    creatingBasicLightboxImg(e.target.dataset.source);
    instance.show();
  }
}

function creatingBasicLightboxImg(img) {
  instance = basicLightbox.create(
    `<img src="${img}" width="800" height="600">`,
    {
      onShow: (instance) => {
        galleryEl.addEventListener("keydown", closeModalWithEscape);
      },
      onClose: (instance) => {
        galleryEl.removeEventListener("keydown", closeModalWithEscape);
      }
    }
  );
}

function closeModalWithEscape(e) {
  if (e.code === "Escape") {
    instance.close();
  }
}