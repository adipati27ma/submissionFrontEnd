class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(e) {
    this._clickEvent = e;
    this.render();
  }

  set keyEvent(e) {
    this._keyEvent = e;
    this.render();
  }

  get value() {
    return this.querySelector(".search-keyword").value;
  }

  render() {
    this.innerHTML = `
      <div class="row">
        <div class="col-md-8 mx-auto">
          <div class="input-group mb-3">
            <input type="search" class="form-control search-keyword" placeholder="Search moovie title...">
            <div class="input-group-append">
              <button class="btn btn-danger" type="button" id="btn-search">Search</button>
            </div>
          </div>
      </div>
    `;

    this.querySelector("#btn-search").addEventListener("click", this._clickEvent);
    this.querySelector(".search-keyword").addEventListener('keypress', this._keyEvent);
  }
}

customElements.define("search-bar", SearchBar);