class Anime {
  constructor(title, genre, episodes, imageUrl) {
    this.title = title;
    this.genre = genre;
    this.episodes = episodes;
    this.imageUrl = imageUrl;
  }

  // Аниме-ийг дэлгэрэнгүй харуулах
  showDetails() {
    return `${this.title} - ${this.genre} (${this.episodes} episodes)`;
  }
}

// Аниме жагсаалт хадгалах массив
let animeList = [];

// Функц үүсгэж аниме мэдээллийг DOM-д нэмэх
function displayAnimeList(list) {
  const animeContainer = document.querySelector(".anime-griad");
  animeContainer.innerHTML = ""; // Хуучин контент цэвэрлэх

  list.forEach((anime, index) => {
    const animeCard = document.createElement("div");
    animeCard.classList.add("anime-carad");
    animeCard.innerHTML = `
      <img src="${anime.imageUrl}" alt="${anime.title}">
      <div class="anime-info">
        <div class="anime-title">${anime.title}</div>
        <div class="anime-meta">${anime.showDetails()}</div>
        <button onclick="removeAnime(${index})">Устгах</button>
      </div>
    `;
    animeContainer.appendChild(animeCard);
  });
}

// JSON өгөгдлийг татаж авах функц
function fetchAnimeData() {
  fetch("/anime.json")
    .then((response) => response.json())
    .then((data) => {
      animeList = data.map(
        (item) =>
          new Anime(item.title, item.genre, item.episodes, item.imageUrl)
      );
      displayAnimeList(animeList);
    })
    .catch((error) => console.error("Error fetching JSON:", error));
}

// Анимег устгах функц
function removeAnime(index) {
  animeList.splice(index, 1); // Массив доторх элементийг устгах
  displayAnimeList(animeList); // Дахин харуулах
}

// Хайлт хийх функц
function searchAnime() {
  const searchInput = document.querySelector("#search").value.toLowerCase();
  const filteredList = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(searchInput)
  );
  displayAnimeList(filteredList);
}

// DOM ачааллах үед JSON өгөгдөл татах
document.addEventListener("DOMContentLoaded", fetchAnimeData);

// Хайлт хийх үйлдэлд event listener нэмэх
document.querySelector("#search").addEventListener("input", searchAnime);
