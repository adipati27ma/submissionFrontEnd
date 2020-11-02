class DataSource {
  static searchMovie(k) {
    return fetch('http://www.omdbapi.com/?apikey=24089ef5&s=' + k)
      .then(response => response.json())
      .then(response => response.Search)
      .catch(`${k} is not found!`);
  }
}

export default DataSource;