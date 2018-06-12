const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f37b0268a99e426eafb03a0a60dfde21');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.everything({
    q: 'bitcoin',
    from: '2017-12-01',
    to: '2017-12-12',
    language: 'en',
    sortBy: 'relevancy',
}).then(response => {
    console.log(response);
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
});