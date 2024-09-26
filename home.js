const url = 'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies';
const apiKey = ''; 
const options = {
  method: 'POST',
  headers: {
    'x-rapidapi-key': apiKey,
    'x-rapidapi-host': 'imdb188.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    country: { anyPrimaryCountries: ['IN'] },
    limit: 200,
    releaseDate: { releaseDateRange: { end: '2029-12-31', start: '2020-01-01' } },
    userRatings: { aggregateRatingRange: { max: 10, min: 6 }, ratingsCountRange: { min: 1000 } },
    genre: { allGenreIds: ['Action'] },
    runtime: { runtimeRangeMinutes: { max: 120, min: 0 } }
  })
};

/*try {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
  const genre = 'Action';
  console.log(genre);
} catch (error) {
  console.error(error);
}
*/
fetch('https://imdb188.p.rapidapi.com/api/v1/getPopularMovies', options) 
    .then(response => response.json())
    .then(response => console.log(response.data.list[0].title))
    .catch(err => console.error(err));

