// search.js
import { animeList } from "./fetchanime.js";
import { displayAnimeList } from "./display.js";

export function searchAnime() {
  const searchInput = document.querySelector("#search").value.toLowerCase();
  const filteredList = animeList.filter((anime) =>
    anime.title.toLowerCase().includes(searchInput)
  );
  displayAnimeList(filteredList);
}
