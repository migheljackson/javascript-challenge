// from data.js
var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);

// tableData.forEach(function (ufoReport) {
//     console.log(ufoReport);
// });

tableData.forEach(function (ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key,value);
        var cell = row.append("td");
    });
});

