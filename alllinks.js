const baseUrl = 'https://api.themoviedb.org/3/';
const endpoint = 'movie/popular/discover/tv';
const queryParams = '?language=en-US&page=1&api_key=5b4a29d8cd1415874abc8fc78e294fac';
const apiKey = '5b4a29d8cd1415874abc8fc78e294fac';
const imageBaseUrl = 'https://api.themoviedb.org/3/movie/movie_id/images?include_image_language'
const apiUrl = `${baseUrl}${endpoint}?language=en-US&page=1&api_key=${apiKey}`;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjRhMjlkOGNkMTQxNTg3NGFiYzhmYzc4ZTI5NGZhYyIsIm5iZiI6MTcyOTExNzM4OS44MDUzNDQsInN1YiI6IjY2ZjM0NTgzNDg0MGY5ODhlOTA4NTE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2Z-5tKasPaBj0Emgu-Sy7kJMIUDa4w7kvBetVZh1bs'
    }
  };


const movieContainer = document.querySelector('.box-container');
const sortInput = document.getElementById('sort-input');
const sortBtn = document.getElementById('sortBtn');
const pagination = document.querySelector('.pagination-ul');
const pages = document.querySelectorAll('.page');
const backBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
    
let currentPage = 1;

// Function to fetch movies
async function fetchMovies(page) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&api_key=${apiKey}`);
  const data = await response.json();
  return data;
}


async function fetchSortedMovies(sortBy) {
  const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${sortBy}&api_key=${apiKey}`);
  const data = await response.json();
  return data.results;
}

// Function to render movies
function renderMovies(movies) {
  movieContainer.innerHTML = '';
  movies.forEach((movie) => {
    const movieHtml = `
      <div class="box">
        <div class="movie-info">
          <img src="https://image.tmdb.org/t/p/w400${movie.poster_path}" alt="${movie.title}" id="image">
          <span id="heart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(243, 3, 3, 0.542)" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 14.0004C26.7886 6.24298 15.5 -1.99928 12.0001 6.99979C8.50006 -1.99928 -2.65695 6.24302 4.13155 14.0004C7.63156 18 10.5001 19.5001 12.0001 20.9995C13.5 19.5001 16.5 17.9999 20 14.0004Z" stroke="rgba(243, 3, 3, 0.542)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
           </svg>
          </span>
          <h3 id="title">${movie.title}</h3>
          <p id="rating">Rating: ${movie.vote_average}<svg width="16" height="16" viewBox="0 0 24 24" fill="#FFFF00" xmlns="http://www.w3.org/2000/svg">
                                                           <path d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z" stroke="#FFFF00" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                          </svg></p>
          <p id="year">Release Date: ${movie.release_date}</p>
          <a href="details.html">
            <button id="moreBtn" >more</button>
          </a>
        </div>
      </div>
    `;
    movieContainer.insertAdjacentHTML('beforeend', movieHtml);
  });
}

// Function to handle page change
function activePage(pageNumber) {
  for (let i of pages) {
    i.classList.remove('active');
  }
  currentPage = pageNumber;
  pages[currentPage - 1].classList.add('active');
  fetchMovies(currentPage).then((data) => renderMovies(data.results));
}

// Add event listeners to page buttons
pages.forEach((page) => {
  page.addEventListener('click', () => {
    activePage(parseInt(page.value));
  });
});

backBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    activePage(currentPage - 1);
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length) {
    activePage(currentPage + 1);
  }
});

// Add event listener to sort button
sortBtn.addEventListener('click', () => {
  const sortBy = sortInput.value;
  fetchSortedMovies(sortBy)
    .then((movies) => renderMovies(movies))
    .catch((error) => console.error('Error fetching movies:', error));
});

// Initial fetch and render
fetchMovies(currentPage).then((data) => renderMovies(data.results));


