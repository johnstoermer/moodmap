const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f37b0268a99e426eafb03a0a60dfde21');
const Data = require('./Data.json');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
function searchAPI(city) {
    let cityJSON = {
        "city" : city,
        "mood" : 0,
        "positiveArticles" : [],
        "negativeArticles" : [],
    };
    newsapi.v2.everything({
        sources: 'cnn, fox-news, the-washington-post, the-wall-street-journal, ' +
        'business-insider, bloomberg, breitbart-news, buzzfeed, abc-news, cbs-news, cnbc, daily-mail,' +
        'entertainment-weekly, fortune, independent, msnbc, mtv-news, nbc-news, reuters, newsweek, the-american-conservative, ' +
        'the-hill, the-huffington-post, the-new-york-times, the-telegraph, the-washington-times, time, usa-today, vice-news',
        q: city,
        from: '2018-05-01',
        to: '2018-05-01',
        language: 'en',
        sortBy: 'relevancy',
    }).then(response => {
        for (let i = 0; i < 20; i++) {
            try {
                let score = 0;
                let titleWords = response.articles[i].title.toLowerCase().split(" ");
                let descriptionWords = response.articles[i].description.toLowerCase().split(" ");
                let words = titleWords.concat(descriptionWords);
                for (let j = 0; j < words.length; j++) {
                    for (let k = 0; k < Data.PositiveWords.length; k++) {
                        if (words[j] === Data.PositiveWords[k]) {
                            score++;
                        }
                    }
                    for (let k = 0; k < Data.NegativeWords.length; k++) {
                        if (words[j] === Data.NegativeWords[k]) {
                            score--;
                        }
                    }
                }
                if (score >= 0) {
                    cityJSON.positiveArticles.push({
                        "title": response.articles[i].title,
                        "description": response.articles[i].description
                    });
                } else {
                    cityJSON.negativeArticles.push({
                        "title": response.articles[i].title,
                        "description": response.articles[i].description
                    });
                }
                console.log(score);
                cityJSON.mood += score;
            } catch (e) {
                console.log('error');
            }
        }
        console.log(cityJSON);
        return cityJSON;
    });
}

let result = searchAPI('canada');