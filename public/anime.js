// anime.js
export class Anime {
  constructor(title, genre, episodes, imageUrl) {
    this.title = title;
    this.genre = genre;
    this.episodes = episodes;
    this.imageUrl = imageUrl;
  }

  showDetails() {
    return `${this.title} - ${this.genre} (${this.episodes} episodes)`;
  }
}
