// Assign the data from `data.js` to a descriptive variable
// from data.js
var data = data;

// YOUR CODE HERE!

// Select the button
var button = d3.select("#button");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  //console.log(data);

  var filteredData = data.filter(sight => sight.datetime === inputValue);

  console.log(filteredData);
  $("#ufo-table tbody tr").remove(); 

  filteredData.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

};

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sighting data from data.js
console.log(data);

data.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});
  