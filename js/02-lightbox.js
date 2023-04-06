import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const arrayOfMarkup = [];

for (let i = 0; i < galleryItems.length; i += 1) {
  arrayOfMarkup.push(`<li class="gallery__item">
    <a class="gallery__link" href="${galleryItems[i].original}">
       <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}" />
    </a></li>`);
}

galleryEl.innerHTML = arrayOfMarkup.join("");

const gallery = new SimpleLightbox(".gallery__item a", {
  captionDelay: 250,
  captionsData: "alt",
});

gallery.on("show.simplelightbox");
