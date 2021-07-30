// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

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

