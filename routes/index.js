const path = require("path");
const router = require("express").Router();
//const apiRoutes = require("./api");

// API Routes
//router.use("/api", apiRoutes);





router.use('/', function (req, res){
    res.render('index');
  })
  
  router.use('/saved', function (req, res){
    res.render('savedArticles');
  })
  
  // SCRAPE FOR NEWS --------------------//
  // SCRAPE route
  router.use("/scrape", function(req,res){
  
    // Scrape for news------------------------------
    axios.get("http://www.nytimes.com", ).then(function(response) {
    
        // Load the HTML into cheerio 
        var $ = cheerio.load(response.data);
  
        // Scrape for latest posted articles
        $("article").each(function(i, element) {
            // Array for scraped data 
            var results = {};
  
            results.link = $(this).children("h2").attr("href");
            results.title = $(this).children("h2").text();
            results.date = $(this).children().children("time").attr("datestamp");
            
            
            // Create new Article from model using results
            if (results.title && results.link && results.summary){
                
                db.Article.create(results) 
                .then(function(dbArticle){
                    console.log(dbArticle);
                })
                .catch(function(err){
                    console.log(err);
                });
            }
  
        });
  
        // Log the results once you've looped through each of the elements found with cheerio
        res.send("scraped!");
        });
    //--------------------------------------
  });
  
  
  
  
  
  // Define API routes here
  
  // Send every other request to the React app
  // Define any API routes before this runs
  router.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });


