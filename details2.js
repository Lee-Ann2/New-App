const baseUrl = 'https://api.themoviedb.org/3/';
const endpoint = 'movie/popular/discover/tv/recommendations/reviews/videos';
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

  async function fetchAdditionalData() {
    const apiKey = '5b4a29d8cd1415874abc8fc78e294fac';
  
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc`);
      const data = await response.json();
      console.log('Additional data fetched:', data);
      renderAdditionalData(data.results[0]);
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  }
  function renderAdditionalData(tv) {
    console.log('Rendering additional data:', tv);
    const trailerContainer = document.getElementById('trailer');
    const movieContainer = document.getElementById('movie');
    const recomContainer = document.getElementById('recom');
    const reviewsContainer = document.getElementById('reviews');
    const castContainer = document.getElementById('cast');
  
    fetch(`https://api.themoviedb.org/3/tv/${tv.id}?api_key=${apiKey}&append_to_response=videos,credits,reviews`)
      .then(response => response.json())
      .then(data => {
        // Render trailer
        trailerContainer.innerHTML = `
          <div class="name"><h1>${data.original_name}</h1></div>
          <div class="trailer-vid">
          <h2>Trailer</h2>
          <iframe src="https://www.youtube.com/embed/${data.videos.results[0]}" frameborder="0" allowfullscreen></iframe>
          </trailer>
        `;
  
        // Render movie info
        movieContainer.innerHTML = `
          <div class="data">
            <h2>Movie Info</h2>
            <p>${data.overview}</p>
            <p>Release Date: ${data.release_date}</p>
            <p>Rating: ${data.vote_average}<svg width="16" height="16" viewBox="0 0 24 24" fill="#ffff00" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M12 2L14.3607 9.26543H22L15.8197 13.7557L18.1803 21.0211L12 16.5309L5.81966 21.0211L8.18034 13.7557L2 9.26543H9.63932L12 2Z" stroke="#ffff00" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
            </p>
          </div>
          <div class="poster">
            <img src="https://image.tmdb.org/t/p/w400${tv.poster_path}" alt="${tv.title}">
          </div>
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(243, 3, 3, 0.542)" xmlns="http://www.w3.org/2000/svg">
             <path d="M20 14.0004C26.7886 6.24298 15.5 -1.99928 12.0001 6.99979C8.50006 -1.99928 -2.65695 6.24302 4.13155 14.0004C7.63156 18 10.5001 19.5001 12.0001 20.9995C13.5 19.5001 16.5 17.9999 20 14.0004Z" stroke="rgba(243, 3, 3, 0.542)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>
          </span>
        `;
 // Render recommendations
/* recomContainer.innerHTML = `
 <h2>Recommendations</h2>
 <ul>
   ${data.recommendations.results.map((recom) => `<li>${recom.title}</li>`).join('')}
 </ul>
`;
*/
// Render reviews
/*reviewsContainer.innerHTML = `
<div class="review">
  <h2>Reviews</h2>
 <ul>
   ${data.credits.results.map((cast) => `
     <li>
       <h3>${credits.name}</h3>
       <p>${credit.character}<span id="dots"></span><span id="more"></span><button id="myBtn" onclick="myFunction()">see more</button></p>
       
     </li>
   `).join('')}
 </ul>
</div>
`;
*/
// Render cast
castContainer.innerHTML = `
     <div class="cast">
        <h2>Cast</h2>
        <ul>
          ${data.credits.cast.map((cast) => `
          <li>
          <h3>${cast.name}</h3>
          <p>Character: ${cast.character}</p>
          </li> `).join('')}
        </ul>
     </div>
      `;
  });
}

// Initialize data fetch
fetchAdditionalData();

function myFunction() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}