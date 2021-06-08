// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//building a function to create a table
function buildTable(data){
    //clear out existing data
    tbody.html("");

    //loop through each object in the data & append a row and cells for each value in the row
    data.forEach((dataRow) => {
        //append a row to the tablebody
        let row = tbody.append("tr");

        //loop through each field in the dataRow and add each balue as a table cell (td)
        Object.values(dataRow).forEach((val)=> {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

//function for HandleClick to filter by date
function HandleClick() {
    let date = d3.select("#datetime").property("value");
    let filterdData = tableData;
    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
};

//Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", HandleClick);

//Build table when page loads
buildTable(tableData);