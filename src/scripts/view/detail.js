function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=24089ef5&i=' + imdbid)
    .then(response => response.json())
    .then(m => m);
}

function updateUIDetail(m) {
  const movieDetail = showDetails(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}

function showDetails(response) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${response.Poster}" alt="" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                <li class="list-group-item">
                    <h4>${response.Title}</h4>
                </li>
                  <li class="list-group-item"><strong>Released : </strong>${response.Released}</li>
                  <li class="list-group-item"><strong>Genre : </strong>${response.Genre}</li>
                  <li class="list-group-item"><strong>Director : </strong>${response.Director}</li>
                  <li class="list-group-item"><strong>Duration : </strong>${response.Runtime}</li>
                  <li class="list-group-item"><strong>Description : <br></strong>${response.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}

export {
  getMovieDetail,
  updateUIDetail
};