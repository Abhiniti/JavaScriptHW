// from data.js
var tableData = data;

//Populate data
var tbody = d3.select("tbody");

//Filter Dates
var filterButton = d3.select("#filter-btn");

filterButton.on("click", function() {
	d3.event.preventDefault();
	
	var inputElement = d3.select("#datetime");
	var inputValue = inputElement.property("value");
	//displaying chosen date
	var selectRow = d3.selectAll("tr");
	tableData.forEach((UFOdata) => {
		if (UFOdata.datetime == inputValue){
			var row = tbody.append("tr");
			Object.values(UFOdata).forEach((value) => {
			var cell = tbody.append("td");
			cell.text(value);
			});
		}
});

});