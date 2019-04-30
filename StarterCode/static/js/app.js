// from data.js

var tableData = data;
// Using the UFO dataset provided in the form of an array 
// of JavaScript objects, write code that appends a table 
// to your web page and then adds new rows of data for
// each UFO sighting.

var tbody = d3.select("tbody")
tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });
  
// write JavaScript code that will listen for events and 
// search through the column to find rows that
// match user input.

// click the button to change data
var button = d3.select("#filter-btn");

function getInputData() {
  // grab the value of the input field
  var inputElement = d3.select("#datetime")
  var inputData = inputElement.property("value");
  // filter through the data and find the matched data, 
  var filterData = data.filter(x => x.datetime === inputData);  
  d3.selectAll("tr").remove(); // before starting loading the new table, remove the previous table 
  filterData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      row.append("td").text(value);
    });
  });
 
}



button.on("click", getInputData);
