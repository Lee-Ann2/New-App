const urls = [
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

fetch('https://imdb188.p.rapidapi.com/api/v1/getPopularMovies', options)
  .then(response => response.json())
  .then(response => {
    const list = response.data;
    const title = response.data.list;
    availableKeywords = title.map((item) => ({
      title: item.originalTitleText,
      image: item.primaryImage,
      year: item.releaseYear
    }));
  })
  .catch(err => {
    console.error(err);
  });


const resultsBox = document.querySelector('.result-box');
const inputBox = document.getElementById('search')

inputBox.onkeyup = function() {
  let availableKeywords = [];
  let result = [];
  let input = inputBox.value;
  if (input.length) {
    result = availableKeywords.filter((keyword) => {
      return keyword.title.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
  display(result);
  if (!result.length) {
    resultsBox.innerHTML = '';
  }
};

function display(result) {
  const content = result.map((item) => {
    return `
      <li onclick="selectInput(this)">
        <img src="${item.image.imageURL}" width="50px" />
        <span>${item.title} (${item.year})</span>
      </li>
    `;
  });
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
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
let slider = document.querySelector('.slider');

next.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.appendChild(slides[0]);
})
prev.addEventListener('click', function() {
    let slides = document.querySelectorAll('.slides');
    slider.prepend(slides[slides.length - 1])
})

const next2 = document.querySelector('.next2');
const prev2 = document.querySelector('.prev2');
let slider2 = document.querySelector('.slider2');

next2.addEventListener('click', function() {
    let slides2 = document.querySelectorAll('.slides2');
    slider2.appendChild(slides2[0]);
})
prev2.addEventListener('click', function() {
    let slides2 = document.querySelectorAll('.slides2');
    slider2.prepend(slides2[slides2.length - 1])
})

