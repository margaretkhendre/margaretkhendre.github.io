// create traces
// an array of names of books
let gooseBumpBooks = ['Monster Blood', "It came from Beneath the Sink", 
                        "Why I am Afraid of Bees"];

// array of the number of times I read each book
let timesRead = [3, 6, 4];

// create trace
let trace1 = {
    x: gooseBumpBooks,
    y: timesRead,
    type: "bar",
    name: "Dr.A's reads"

};

// make the array that holds the trace 
var data = [trace1];

// set the layout information
var layout = {
    title: "Dr.A's Goosebumps Series Reads"
};

// call Plotly to plot the chart in the id 'plot1'
Plotly.newPlot('plot1', data, layout);


// if ther is another reader, add their information
// array of the number of times the other reader read each book
let timesRead2 = [6, 3, 1]

// make a second trace for the other reader
let trace2 = {
    x: gooseBumpBooks,
    y: timesRead2,
    type: "bar",
    name: "User's reads"
};

// to make a grouped chart, add the second trace to the array of data
let data2 = [trace1, trace2];

// update the layout
var layout2 = {
    title: "Dr. A and the other user's Goosebumps reads"
}

// call plotly to plot the second grouped bar chart in the id 'plot2'
Plotly.newPlot('plot2', data2, layout2)
