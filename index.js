//select button and set variable
var button = d3.select("#button");

// Getting a reference to the input element 
var inputField = d3.select("#input");

//`on` function in d3 to attach an event handler
button.on("Suggest", handleClick);

// Event handlers for button
button.on("Suggest", function() {
  d3.select(".button").html("results.html"});

