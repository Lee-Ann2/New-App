const scrollers = document.querySelectorAll('.scroller');
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
   scrollers.forEach((scroller) => {
    scroller.setAttribute('data-animated', true)
   });
}



fetch('https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=US', options)
  .then(response => response.json())
  .then(response => {
    const data = response.data;
    for (let i = 1; i <= 10; i++) {
      console.log(data[i]);
    }
  })
  .catch(error => console.error(error));

  function displayProviderData(providerName) {
    const dataObject = window.streamingData.find((obj) => obj.providerName === providerName);
    dataObject.edges.forEach((edge) => {
      console.log(edge); // Log each edge object
  
      // Access specific properties (e.g., title)
      console.log(edge.title);
    })
    // Create a new window
    const newWindow = window.open('', '_blank');
    
    // Create HTML content for the new window
    const htmlContent = `
      <h1>${providerName}</h1>
      <ul>
        ${dataObject.edges.map((edge) => `<li>${edge.title}</li>`).join('')}
      </ul>
    `;
    
    // Write the HTML content to the new window
    newWindow.document.write(htmlContent);
  }
  