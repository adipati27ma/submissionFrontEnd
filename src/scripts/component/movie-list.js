import './movie-card.js';

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._movies.forEach((m, i) => {
      if (m.Poster !== "N/A") {
        const movieCardEl = document.createElement("movie-card");
        movieCardEl.movie = m;
        this.appendChild(movieCardEl);
      }
    });
  }

  renderError(k) {
    if (k) {
      this.innerHTML += `<h2 class="placeholder">${k} is not Found!</h2>`;
    } else {
      this.innerHTML += `<h2 class="placeholder">Fill the search field first!</h2>`;
    }
  }
}

customElements.define("movie-list", MovieList);