// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var form = d3.select("#dateform")
var filterButton = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");

console.log(tableData);

// Submit Button handler
function handleSubmit() {
    d3.event.preventDefault();

    var filtDate = inputDate.property("value").trim();
    // var inputValue = d3.select("value");

    console.log(filtDate)

    var filteredData = tableData.filter(tableData => tableData.datetime === filtDate);
    
    console.log(filteredData)

    tbody.html("");

    filteredData.forEach(function (ufoReport) {
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

filterButton.on("click",handleSubmit);
form.on("submit",handleSubmit);
