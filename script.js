/*const urls = [
   'https://imdb188.p.rapidapi.com/api/v1/getPopularMovies',
   'https://imdb188.p.rapidapi.com/api/v1/getPopularTVShows'
]

const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '6a0c795ee6mshb589b0201c4f40cp161c4bjsn9e1ea5c78142',
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};

let list = [];

Promise.all(urls.map(url => fetch(url, options).then(response => response.json())))
  .then(responses => {
    list = responses.flatMap(response => 
      response.data.list.map(item => ({
        title: item.originalTitleText,
        image: item.primaryImage,
        year: item.releaseYear
      }))
    );
  })
  .catch(err => {
    console.error(err);
  });

const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('search');

inputBox.onkeyup = function() {
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = list.filter(list => 
      list.title.toLowerCase().includes(input.toLowerCase())
    );
  }
  display(result);
  if (!result.length) {
    resultsBox.innerHTML = '';
  }
};

function display(result) {
  const content = result.map(item => `
    <li onclick="selectInput(this)">
      <img src="${item.image}" width="50px" />
      <span>${item.title} (${item.year})</span>
    </li>
  `);
  resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>';
};

function selectInput(list) {
  const title = list.querySelector('span').textContent;
  inputBox.value = title;
  resultsBox.innerHTML = '';
}




/*inputBox.onkeyup = function() {
  let result = [];
  let input = inputBox.value;
  if(input.length) {
    result = availableKeywords.filter((keyword) => {
       return keyword.title.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result)
  }
  display(result);

  if(!result.length) {
    resultsBox.innerHTML = '';
  }
}

function display(result) {
  const content = result.map((item) => {
    return `<li onclick = 'selectInput(this)'>
              <img src = '${item.primaryImage.imageURL}' width = '50px'/>
              <span>${item.originalTitleText} (${item.releaseYear.year})</span>
            </li>`;
  });

  resultsBox.innerHTML = '<ul>' + content.join('') + '</ul>';
}

function selectInput(list) {
  const title = list.querySelector('span').textContent;
  inputBox.value = title;
  resultsBox.innerHTML = '';
}
*/

const container = document.querySelector('.container');
const next = document.querySelector('.next');  
const prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');
const next2 = document.querySelector('.next2');
const prev2 = document.querySelector('.prev2');
let slider2 = document.querySelector('.slider2');

const url = 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': [My-api-key],
		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
	}
};

async function fetchData(url, options) {
  try {
    const response = await fetch(url, options);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

fetch('https://imdb188.p.rapidapi.com/api/v1/getWeekTop10', options)
  .then(response => response.json())
  .then(response => {
    const data = response.data;
    window.watchingData = data;
    initializeWatchingList(data);
  })
  .then(response => {
    const list = response.list[0];
    for(i = 1; i < 9; i ++) {
      console.log(list[i])
    }
  })
  .then(response => {
    const top10Movies = [];
    for (const key in response.data.list) {
      top10Movies.push({
        title: response.data.list[key].originalTitleText,
        image: response.data.list[key].primaryImage.imageURL,
        year: response.data.list[key].releaseYear
      });
    }

    top10Movies.forEach((movie, index) => {
      const slideHtml = `
        <div class="slides">
          <h2>${movie.title}</h2>
          <img src="${movie.image}" />
          <p>${movie.year}</p>
        </div>
      `;
      slider.insertAdjacentHTML('beforeend', slideHtml);

      const slideHtml2 = `
        <div class="slides2">
          <h2>${movie.title}</h2>
          <img src="${movie.image}" />
          <p>${movie.year}</p>
        </div>
      `;
      slider2.insertAdjacentHTML('beforeend', slideHtml2);
    });
  })
  .catch(error => console.error(error));

  function initializeWatchingList(data) {
    const watchingList = document.querySelector('.slider');
    watchingList.innerHTML = '';
    
    data.forEach((obj) => {
      const div = document.createElement('div');
      div.textContent = obj.title;
      watchingList.appendChild(div);
    });
    
    watchingList.addEventListener('click', (e) => {
      if (e.target.tagName === 'DIV') {
        const title = e.target.textContent;
        displayTitleData(title);
      }
    });
  }
  function displayTitleData(title) {
    const dataObject = window.watchingData.find((obj) => obj.title === title);
    dataObject.originalTitleText.forEach((originalTitleText) => {
      console.log(originalTitleText); // Log each edge object
  
      // Access specific properties (e.g., title)
      console.log(title.originalTitleText.year.image.imageURL);
    })
    // Create a new window
    
  }

next.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
  slider.appendChild(slides[0]);
});

prev.addEventListener('click', function() {
  let slides = document.querySelectorAll('.slides');
  slider.prepend(slides[slides.length - 1]);
});
next2.addEventListener('click', function() {
  let slides2 = document.querySelectorAll('.slides2');
  slider2.appendChild(slides2[0]);
});

prev2.addEventListener('click', function() {
  let slides2 = document.querySelectorAll('.slides2');
  slider2.prepend(slides2[slides2.length - 1]);
});


/* My solution....
const container = document.querySelector('.container');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');
const next2 = document.querySelector('.next2');
const prev2 = document.querySelector('.prev2');
let slider2 = document.querySelector('.slider2');

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

fetch('https://imdb188.p.rapidapi.com/api/v1/getWeekTop10', options)
  .then(response => response.json())
  .then(response => {
    const data = response.data;
    window.watchingData = data;
    initializeWatchingData(data);
  })
  .then(response => {
    const list = response.list[0];
    for(i = 1; i < 9; i ++) {
      console.log(list[i])
    }
  })
  .then(response => {
    const top10Movies = [];
      for (const key in response.data.list) {
      top10Movies.push({
        title: response.data.list[key].originalTitleText,
        image: response.data.list[key].primaryImage.imageURL,
        year: response.data.list[key].releaseYear
  });
}
  
    top10Movies.forEach((movie, index) => {
      const slideHtml = `
        <div class="slides">
          <h2>${movie.title}</h2>
          <img src="${movie.image}" />
          <p> ${movie.year}</p>
        </div>
      `;
      slider.insertAdjacentHTML('beforeend', slideHtml);

      const slideHtml2 = `
        <div class="slides2">
          <h2>${movie.title}</h2>
          <img src="${movie.image}" />
          <p> ${movie.year}</p>
        </div>
      `;
      slider2.insertAdjacentHTML('beforeend', slideHtml2);
    });
  })
  .catch(error => console.error(error));  

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1])
})



next2.addEventListener('click', function() {
    let slides2 = document.querySelectorAll('.slides2');
    slider2.appendChild(slides2[0]);
})
prev2.addEventListener('click', function() {
    let slides2 = document.querySelectorAll('.slides2');
    slider2.prepend(slides2[slides2.length - 1])
})

*/