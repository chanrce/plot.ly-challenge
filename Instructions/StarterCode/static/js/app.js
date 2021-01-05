/* The following is an example on how you might structure your code.
This is not the only way to complete this assignment.
Feel free to disregard and create your own code */

// Define a function that will create metadata for given sample
function buildMetadata(sample) {

    // Read the json data
    d3.json("samples.json").then((data) => {
        // Parse and filter the data to get the sample's metadata
        //Getting metadata from samples.json
        var Metadata = data.metadata;

        //Filtering the samples.json data by id. Returning samples.json values if they match the given "sample"
        var filteredData =  Metadata.filter(selectiondata => selectiondata.id == sample);
        filteredData = filteredData[0]
        console.log(filteredData);
        

        // Specify the location of the metadata -- where the new demographic chart will go --  and update it
        //Identifying the location -- use inspect HTML
        var demographics = d3.select("#sample-metadata");

        //Refreshing/Updating the chart with new selected sample
        demographics.html("");




    });
    

}

// Define a function that will create charts for given sample
function buildCharts(sample) {

    // Read the json data

        // Parse and filter the data to get the sample's OTU data
        // Pay attention to what data is required for each chart

        // Create bar chart in correct location

        // Create bubble chart in correct location
    
}

// Define function that will run on page load
function init() {

    // Read json data

        // Parse and filter data to get sample names

        // Add dropdown option for each sample

    // Use first sample to build metadata and initial plots

}

function optionChanged(newSample){

    // Update metadata with newly selected sample
    buildMetadata(newSample);
    // Update charts with newly selected sample
    buildCharts(newSample);
}

// Initialize dashboard on page load
init();

