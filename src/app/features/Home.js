
const Home = (argument = '') => {
    const preparePage = () => {
        const cleanedArgument = argument.trim().replace(/\s+/g, '-');
    
        const displayResults = (articles) => {
          const resultsContent = articles.map((article) => (
            `<article class="cardGame">
              <img class="card-thumbnail" src="${article.background_image}">

              <a href="#pagedetail/${article.id}" class="card-link"><h1>${article.name}</h1></a>

            </article>`
          ));
          const resultsContainer = document.querySelector('.page-list .articles');
          resultsContainer.innerHTML = resultsContent.join("\n");
        };
    
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
            <div class="articles">Loading...</div>
          </section>
        `;
    
        preparePage();
      };
    
      render();
};
export { Home }

