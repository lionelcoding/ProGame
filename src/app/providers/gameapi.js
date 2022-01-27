class Rawg {
    constructor(){


    }

    initLogic(){

      const fetchList = (url, argument) => {
        const finalURL = argument ? `${url}&search=${argument}` : url;
        fetch(finalURL)
          .then((response) => response.json())
          .then((responseData) => {
            displayResults(responseData.results)
          });
      };
  
      fetchList(`https://api.rawg.io/api/games?key=${process.env.API_KEY}`, cleanedArgument);
    }


}