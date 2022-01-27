
const PageList = (argument = '') => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');
  
      const displayResults = (articles) => {
        const resultsContent = articles.map((article) => (
          `<article class="cardGame">
          <div class="img-container">
            <img class="card-thumbnail" src="${article.background_image}">
            <div id="infos" style="display: none;">
              <h3>${article.released}</h3>
              <h3>${article.rating}/5 - ${article.ratings_count} votes</h3>
              <p>${article.tags
          ? article.tags.map((tag) => (article.tags.indexOf(tag) <= 10
            ? (`${tag.name}, `)
            : (''))).join('')
          : ''}</p>
          </div>
          <a href="#pagedetail/${article.id}" class="card-link"><h1>${article.name}</h1></a>
            </article>`
        ));
        const resultsContainer = document.querySelector('.page-list .articles');
        resultsContainer.innerHTML = resultsContent.join("\n");
      };
      const cards = Array.from(document.querySelectorAll('.cardGame'));
      cards.map((card) => {
        if (cards.indexOf(card) >= 9) card.style.display = 'none';

        card.addEventListener('mouseenter', () => {
          card.querySelector('#infos').style.display = '';
          card.querySelector('img').style.display = 'none';
        });
        card.addEventListener('mouseleave', () => {
          card.querySelector('#infos').style.display = 'none';
          card.querySelector('img').style.display = '';
        });
      });

      
  
      const fetchList = (url, argument) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => {
            displayResults(responseData.results)
          });
      };
  
      fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
      <section class="page-list">
      <div class="lds-dual-ring"></div>
        <div class="articles"></div>
      </section>
      <button class="btn-red see-more-btn">See More</button>
      `;
  
      preparePage();
    };
  
    render();
};

export { PageList }