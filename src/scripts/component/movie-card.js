class MovieCard extends HTMLElement {
  set movie(mov) {
    this._movie = mov;
    this.render();
  }

  render() {
    this.innerHTML = `<div class="col-md my-3">
        <div class="card">
          <a href="${this._movie.Poster}" target="_blank"><img src="${this._movie.Poster}" class="card-img-top" alt=""></a>
          <div class="card-body">
              <h5 class="card-title">${this._movie.Title}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${this._movie.Year}</h6>
              <a href="#" class="btn btn-danger btn-detail" data-toggle="modal" data-target="#detailsModal" data-imdbid="${this._movie.imdbID}">Show Details</a>
          </div>
        </div>
      </div>`;
  }
}


customElements.define("movie-card", MovieCard);