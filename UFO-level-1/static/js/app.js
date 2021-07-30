// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
  
    // Select the input value from the form
    var datetime = d3.select("#datetime").node().value;
    console.log(datetime);
  
    // // Select the input value from the form
    // var startDateForm = d3.select("#startDateInput").node().value;
    // console.log(startDateForm);
  
    // // Select the input value from the form
    // var endDateForm = d3.select("#endDateInput").node().value;
    // console.log(endDateForm);
  
    // // clear the input value
    // d3.select("#stockInput").node().value = "";
  
    // // clear the input value
    // d3.select("#startDateInput").node().value = "";
  
    // // clear the input value
    // d3.select("#endDateInput").node().value = "";
  
    // Build the plot with the new stock
    buildPlot(stock,startDateForm,endDateForm);
};

// tableData.forEach(function (ufoReport) {
//     console.log(ufoReport);
// });

//for each ufo report, create a new row
tableData.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    //for each entry in each ufo report, create a new cell
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");

        //add each value in ufo report to a successive cell
        cell.text(value);
    });
});

