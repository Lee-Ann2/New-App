const urls = {
    link1: 'https://imdb188.p.rapidapi.com/api/v1/getKeywords',
    link2: 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US',
    link3: 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10',
    link4: 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US',
    link5: 'https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=01&day=01',
    link6: 'https://imdb188.p.rapidapi.com/api/v1/getKeywords',
    link7: 'https://imdb188.p.rapidapi.com/api/v1/getGenres',
    link8: 'https://imdb188.p.rapidapi.com/api/v1/getLanguages',
    link9: 'https://imdb188.p.rapidapi.com/api/v1/getCountries',
    link10: 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=US',
    link11: 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingTVEpisode?region=US',
    link12: 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingTV?region=US',
    link13: 'https://imdb188.p.rapidapi.com/api/v1/emmyWinners',
    link14: 'https://imdb188.p.rapidapi.com/api/v1/getOscarWinners',
    link15: 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=US'
}
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '6a0c795ee6mshb589b0201c4f40cp161c4bjsn9e1ea5c78142',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};

async function fetchData(url) {
    try {
      const response = await fetch(url, options);
      return await response.json();

    } catch (error) {
      console.error(error);
      return null;
    }
  }
  
  async function main() {
    const promises = Object.values(urls).map(fetchData);
    const results = await Promise.all(promises);
    console.log(results);
  }
  
main()

fetch('https://imdb188.p.rapidapi.com/api/v1/getKeywords', options)
  .then(response => response.json())
  .then(response => {
    console.log(response.data.all_keywords);
    displayCatergory(response.data.all_keywords); // Pass the data to the function
  })
  .catch(error => console.error(error));

function displayCatergory(all_keywords) {
  const catergories = document.getElementById('catergories');

  all_keywords.forEach(all_keyword => { // Assuming 'keywords' is an array of keywords
    const catergory = document.createElement('li');
    catergory.textContent = all_keyword; // Access the keyword directly
    catergories.appendChild(catergory);
  });
}
/*
fetch('https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=US', options)
  .then(response => response.json())
  .then(response => {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const primaryImages = response.data.list.map(item => item.primaryImage);
    const titles = response.data.list.map(item => item.titleText);
    const summaries = response.data.list.map(item => item.ratingSummary);

    for (let i = 0; i < Math.min(20, primaryImages.length); i++) {
      const slide = document.createElement('div');
      slide.classList.add('swiper-slide');
      slide.innerHTML = `
        <img src="${primaryImages[i]}" alt="${titles[i]}">
        <h1>${titles[i]}</h1>
        <p>${summaries[i]}</p>
        <button class="playBtn">more...</button>
      `;
      swiperWrapper.appendChild(slide);
    }

    // Initialize Swiper after appending slides
    const swiper = new Swiper('.mySwiper', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  })
  .catch(error => console.error(error));

*/

fetch('https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US', options)
    .then(response => response.json())
    .then(response => {
      const data = response.data;
      window.streamingData = data;
      initializeStreamingList(data);
    })
    .then(response => {
      const edge = response.edges[0];
      for(i = 1; i < 10; i ++) {
        console.log(edge[i])
      }
    })
    .catch(error => console.error(error));

  function initializeStreamingList(data) {
    const streamingList = document.getElementById('streaming-list');
    streamingList.innerHTML = '';
    
    data.forEach((obj) => {
      const li = document.createElement('li');
      li.textContent = obj.providerName;
      streamingList.appendChild(li);
    });
    
    streamingList.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        const providerName = e.target.textContent;
        displayProviderData(providerName);
      }
    });
  }
  function displayProviderData(providerName) {
    const dataObject = window.streamingData.find((obj) => obj.providerName === providerName);
    dataObject.edges.forEach((edge) => {
      console.log(edge); // Log each edge object
  
      // Access specific properties (e.g., title)
      console.log(edge.title);
    })
    // Create a new window
    const newWindow = window.open('Watchit', '_blank');
    
    // Write the HTML content to the new window
    newWindow.document.write(htmlContent);
  }
  
  
  
  

const search = document.getElementById('search');
const searchIcon = document.getElementById('searchicon');
const accountbtn = document.getElementById('account');
const addacc = document.getElementById('addacc');
const settings = document.getElementById('settings');
const moreSet = document.getElementsByClassName('more-set');
const catergories = document.querySelector('#catergories');
const buttons = document.querySelectorAll('[data-carousel-button]')

accountbtn.addEventListener('click', () => {
  addacc.style.visibility = addacc.style.visibility === 'visible' ? 'hidden' : 'visible';
});

settings.addEventListener('click', () => {
  for (let i = 0; i < moreSet.length; i++) {
    moreSet[i].style.visibility = moreSet[i].style.visibility === 'visible' ? 'hidden' : 'visible';
  }
});



