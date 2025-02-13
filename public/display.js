// display.js
import { animeList } from "./fetchanime.js";

export function displayAnimeList(list) {
  const animeContainer = document.querySelector(".anime-griad");
  animeContainer.innerHTML = "";

  list.forEach((anime, index) => {
    const animeCard = document.createElement("div");
    animeCard.classList.add("anime-carad");
    animeCard.innerHTML = `
      <img src="${anime.imageUrl}" alt="${anime.title}">
      <div class="anime-info">
        <div class="anime-title">${anime.title}</div>
        <div class="anime-meta">${anime.showDetails()}</div>
        <button class="remove-btn" data-index="${index}">Устгах</button>
      </div>
    `;
    animeContainer.appendChild(animeCard);
  });

  document.querySelectorAll(".remove-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      removeAnime(btn.dataset.index);
    });
  });
}

export function removeAnime(index) {
  animeList.splice(index, 1);
  displayAnimeList(animeList);
}
