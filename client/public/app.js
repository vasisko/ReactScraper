// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      console.log("length: " + data.length);
      // Display the apropos information on the page
      $("#articles").append("<div class='article-container'><h4 class='headline'>" + data[i].title + "</h4><p data-id='" + data[i]._id + "'>" 
      + "<br /><a class='article-url' href='" +  data[i].link + "' target='new'>" + data[i].link + 
       "</a></p></div>");
    }
  });

  // When someone clicks the scrape button
  $(document).on("click", "#scrape", function(){
    console.log("lets scrape");
    $.ajax({
      method: "GET",
      url: "/scrape"
    })
    .then (function(data){
      window.location.reload();
  });
});


//   // When someone clicks an article 
//   $(document).on("click", "div.article-container", function() {
//     // Empty the notes from the note section
//     $("#notes").empty();
//     // Save the id from the p tag
//     var thisId = $(this).children("p").attr("data-id");
    
//     // Now make an ajax call for the Article
//     $.ajax({
//       method: "GET",
//       url: "/articles/" + thisId
//     })
//     // With that done, add the note information to the page
//     .then(function(data) {
      
//       // The title of the article
//       $("#notes").append("<h2>" + data.title + "</h2>");
//       // An input to enter a new title
//       $("#notes").append("<input id='titleinput' name='title' >");
//       // A textarea to add a new note body
//       $("#notes").append("<textarea id='bodyinput' name='body'></textarea>");
//       // A button to submit a new note, with the id of the article saved to it
//       $("#notes").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");

//       // If there's a note in the article
//       if (data.note) {
//         // Place the title of the note in the title input
//         $("#titleinput").val(data.note.title);
//         // Place the body of the note in the body textarea
//         $("#bodyinput").val(data.note.body);
//       }
//     });
// });

// // When you click the savenote button
// $(document).on("click", "#savenote", function() {
//   // Grab the id associated with the article from the submit button
//   var thisId = $(this).attr("data-id");
// +

//   // Also, remove the values entered in the input and textarea for note entry
//   $("#titleinput").val("");
//   $("#bodyinput").val("");
// });