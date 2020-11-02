import "../component/search-bar.js";
import "../component/movie-list.js";
import DataSource from "../data/data-source.js";
import {
  getMovieDetail,
  updateUIDetail
} from "./detail.js";


const main = () => {
  const searchElement = document.querySelector("search-bar");
  const movieListEl = document.querySelector("movie-list");

  // search button clicked
  const onButtonSearchClicked = () => {
    DataSource.searchMovie(searchElement.value)
      .then(renderResult)
      .catch(r => fallbackResult(searchElement.value));
  };
  searchElement.clickEvent = onButtonSearchClicked;

  // enter pressed
  const onKeyInSearchPressed = async (e) => {
    if (e.keyCode === 13) {
      try {
        const result = await DataSource.searchMovie(searchElement.value)
        renderResult(result);
      } catch (err) {
        fallbackResult(searchElement.value);
      }
    }
  };
  searchElement.keyEvent = onKeyInSearchPressed;



  const renderResult = results => movieListEl.movies = results;

  const fallbackResult = keyword => movieListEl.renderError(keyword);



  // show details button clicked
  document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('btn-detail')) {
      try {
        const modalBody = document.querySelector('.modal-body');
        modalBody.innerHTML = "Please wait...";
        const imdbid = e.target.dataset.imdbid;
        const details = await getMovieDetail(imdbid);
        updateUIDetail(details);
      } catch (err) {
        alert(err);
      }
    }
  });
}


export default main;