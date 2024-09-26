const url = 'https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': ,
		'x-rapidapi-host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1', options) 
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => {
    console.error('Error fetching data:', error);
  });