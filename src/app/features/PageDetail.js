
const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, "-");
  
      const displayGame = (gameData) => {

        const articleDOM = document.querySelector(".page-detail .article");
        articleDOM.querySelector('h1.title').innerHTML = `${gameData.name},`;
        articleDOM.querySelector('h3.release-date span').innerHTML = gameData.released;
        articleDOM.querySelector('p.description').innerHTML = gameData.description;
        document.querySelector('img.main-image').src = gameData.background_image;
        articleDOM.querySelector('h1.ratings').innerText = `${gameData.rating}/5 - ${gameData.reviews_count} votes`;
        articleDOM.querySelector('h3.developers span').innerHTML = gameData.developers.map((developer) => (`<a href="#pagelist/developers=${developer.id}">${developer.name}</a>`)).join(', ');
        articleDOM.querySelector('h3.platforms span').innerHTML = gameData.parent_platforms.map((platform) => (platform.platform.slug !== 'web'
          ? (`<img class="logo" src="./dist/${logos[platform.platform.slug]}">`)
          : (''))).join('');
        articleDOM.querySelector('h3.publishers span').innerHTML = gameData.publishers.map((publisher) => `<a href="#pagelist/publishers=${publisher.id}">${publisher.name}</a>`).join(', ');
        articleDOM.querySelector('h3.genres span').innerHTML = gameData.genres.map((genre) => `<a href="#pagelist/genres=${genre.id}">${genre.name}</a>`).join(', ');
        articleDOM.querySelector('h3.tags span').innerHTML = gameData.tags.map((tag) => `<a href="#pagelist/tags=${tag.id}">${tag.name}</a>`).join(', ');
        articleDOM.querySelector('p.stores').innerHTML = gameData.stores.map((store) => `<a href="${store.store.domain}">${store.store.name}</a>`).join('');
  
        document.querySelector('.lds-dual-ring').remove();
      };
  
      const fetchGame = (url, argument) => {
        fetch(`${url}/${argument}?key=${process.env.API_KEY}`)
          .then((response) => response.json())
          .then((responseData) => {
            displayGame(responseData);
          });
      };
  
      fetchGame('https://api.rawg.io/api/games', cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
        <section class="page-detail">
        <div class="lds-dual-ring"></div>
        <img src="" class="main-image"/>
          <div class="article">
            <h1 class="title"></h1>
            <h1 class="ratings"></h1>
            <p class="description"></p>
            <div class="infos">
              <div class="first-row">
                <h3 class="release-date">Release date : <span></span></h3>
                <h3 class="developers">Developers : <span></span></h3>
                <h3 class="platforms">Platforms : <span></span></h3>
                <h3 class="publishers">Publishers : <span></span></h3>
              </div>
              <div class="second-row">
                <h3 class="genres">Genres : <span></span></h3>
                <h3 class="tags">tags : <span></span></h3>
              </div>
            </div>
            <div class="buy-section">
              <h1 class="title">BUY</h1>
              <p class="stores"></p>
            </div>
          </div>
        </section>
      `;
  
  
      preparePage();
    };
  
    render();
};

export { PageDetail }