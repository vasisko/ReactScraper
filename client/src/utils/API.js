import axios from "axios";

export default {
  
  // Gets all articles saved in DB
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  },
  // Scrape NYT for articles using user params
  scrapeNYT: function(topic, startYear, endYear){
    const apiKey= "2ce83e1a7a1a442282d8f228334757ac";
    const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey;

    const urlAddOn = "&q=" + topic;
    const startDate = "&start_date=" + startYear + "0101";
    const endDate = "&end_date=" + endYear + "0101";
  
    if (startYear && endYear) {
      urlAddOn += startDate + endDate;
    } else if (startYear) {
      urlAddOn += startDate;
    } else if (endYear) {
      urlAddOn += endDate;
    }
    
    return axios.get(baseURL + URL);
  }
  }
};
