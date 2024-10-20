const baseUrl = 'https://api.themoviedb.org/3/';
const endpoint = 'movie/popular/discover';
const queryParams = '?language=en-US&page=1&api_key=5b4a29d8cd1415874abc8fc78e294fac';
const apiKey = '5b4a29d8cd1415874abc8fc78e294fac';
const apiUrl = `${baseUrl}${endpoint}?language=en-US&page=1&api_key=${apiKey}`;
const options = { 
    method: 'GET', 
    headers: {
    
        'host' : 'api.themoviedb.org',
        'Accept': 'application/json',
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YjRhMjlkOGNkMTQxNTg3NGFiYzhmYzc4ZTI5NGZhYyIsIm5iZiI6MTcyOTExNzM4OS44MDUzNDQsInN1YiI6IjY2ZjM0NTgzNDg0MGY5ODhlOTA4NTE3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P2Z-5tKasPaBj0Emgu-Sy7kJMIUDa4w7kvBetVZh1bs'
    },
    
  };

  const searchInput = document.getElementById('search');
  const searchResultsContainer = document.getElementById('search-results');
  
  searchInput.addEventListener('input', async (e) => {
    const searchTerm = e.target.value.trim();
    if (searchTerm.length < 3) return;
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/search/multi?query=movie&include_adult=true&language=en-US&page=1`);
      const data = await response.json();
      const results = data.results;
  
      searchResultsContainer.innerHTML = '';
  
      results.forEach((movie) => {
        const resultHTML = `
          <div class="search-result">
            <img src="https://image.tmdb.org/t/p/w92${movie.poster_path}" alt="${movie.title}">
            <h4>${movie.title}</h4>
           <p>${movie.release_date}</p>
          </div>
        `;
        searchResultsContainer.insertAdjacentHTML('beforeend', resultHTML);
      });
    } catch (error) {
      console.error(error);
    }
  });
  
  // Hide search results when input is empty
  searchInput.addEventListener('blur', () => {
    if (searchInput.value.trim() === '') {
      searchResultsContainer.innerHTML = '';
    }
  });


const pageSize = 15;

const fetchPopularMovies = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=5b4a29d8cd1415874abc8fc78e294fac', options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const results = data.results.slice(1, pageSize);
        return results;
    } catch (err) {
        return console.error('Error:', err);
    }
  };
  
  const renderSlider = (movies) => {
    const slider = document.querySelector('.slider');
    movies.forEach(movie => {
      const slide = document.createElement('div');
      slide.classList.add('slides');
      slide.style.setProperty('--img', `url(https://image.tmdb.org/t/p/w400${movie.poster_path})`);
  
      const content = document.createElement('div');
      content.classList.add('content');
  
      const title = document.createElement('h2');
      title.id = 'title';
      title.textContent = movie.title;
  
      const rating = document.createElement('p');
      rating.id = 'rating';
      rating.textContent = `Rating: ${movie.vote_average}/10`;
  
      const year = document.createElement('p');
      year.id = 'year';
      year.textContent = `Year: ${movie.release_date}`;
  
      content.appendChild(title);
      content.appendChild(rating);
      content.appendChild(year);
      slide.appendChild(content);
      slider.appendChild(slide);
    });
  };const handleNextPrevButtons = () => {
    const next = document.querySelector('.next');
    const prev = document.querySelector('.prev');
    const slider = document.querySelector('.slider');
  
    next.addEventListener('click', function() {
      const slides = document.querySelectorAll('.slides');
      slider.appendChild(slides[0]);
    });
  
    prev.addEventListener('click', function() {
      const slides = document.querySelectorAll('.slides');
      slider.prepend(slides[slides.length - 1]);
    });
  };
  
  fetchPopularMovies()
    .then(movies => {
      renderSlider(movies);
      handleNextPrevButtons();
    });
  
let pageSize2 = 15
const fetchPopularShows = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const results = data.results.slice(1, pageSize2);
        return results;
    } catch (err) {
        return console.error('Error:', err);
    }
  };
    
  const renderSlider2 = (tvs) => {
    const slider2 = document.querySelector('.slider2');
    tvs.forEach(tv => {
      const slide2 = document.createElement('div');
      slide2.classList.add('slides2');
      slide2.style.setProperty('--img', `url(https://image.tmdb.org/t/p/w400${tv.poster_path})`);
  
      const content2 = document.createElement('div');
      content2.classList.add('content2');
  
      const title2 = document.createElement('h2');
      title2.id = 'title';
      title2.textContent = tv.original_name;
  
      const rating2 = document.createElement('p');
      rating2.id = 'rating';
      rating2.textContent = `Rating: ${tv.vote_average}/10`;
  
      const year2 = document.createElement('p');
      year2.id = 'year';
      year2.textContent = `Year: ${tv.first_air_date}`;
  
      content2.appendChild(title2);
      content2.appendChild(rating2);
      content2.appendChild(year2);
      slide2.appendChild(content2);
      slider2.appendChild(slide2);
    });
  };
  const handleNextPrevButtons2 = () => {
    const next2 = document.querySelector('.next2');
    const prev2 = document.querySelector('.prev2');
    const slider2 = document.querySelector('.slider2');
  
    next2.addEventListener('click', function() {
      const slides2 = document.querySelectorAll('.slides2');
      slider2.appendChild(slides2[0]);
    });
  
    prev2.addEventListener('click', function() {
      const slides2 = document.querySelectorAll('.slides2');
      slider2.prepend(slides2[slides2.length - 1]);
    });
  };
  
  fetchPopularShows()
    .then(tvs => {
      renderSlider2(tvs);
      handleNextPrevButtons2();
    });
  

const accountbtn = document.getElementById('account');
const addacc = document.getElementById('addacc');
const settings = document.getElementById('settings');
const moreSet = document.getElementsByClassName('more-set');

accountbtn.addEventListener('click', () => {
  addacc.style.visibility = addacc.style.visibility === 'visible' ? 'hidden' : 'visible';
});

settings.addEventListener('click', () => {
  for (let i = 0; i < moreSet.length; i++) {
    moreSet[i].style.visibility = moreSet[i].style.visibility === 'visible' ? 'hidden' : 'visible';
    }
  });
  