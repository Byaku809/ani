// fetchAnime.js
import { Anime } from "./anime.js";

export let animeList = [];

export function fetchAnimeData(displayAnimeList) {
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
