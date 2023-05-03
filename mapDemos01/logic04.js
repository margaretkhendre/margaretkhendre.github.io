/*
    Leaflet maps consist of layers:
        base layer -tile
        marker layer(s) - the markers that go on top of the tile 
*/

// tell where the map is going to be located - use L.map() in order to set the location 
// of the mapp

// L - leaflet

// create our initial map object by setting the latitude, longitude, and zoom level
// store this information into a variable using let or var

// atl coordinates: 33.7488 N, 84.3877 W -> [33.7488, -84.3877]

var myMap = L.map("map", 
    {
        center: [33.7488, -84.3877],
        zoom: 10
    }
);

// add the initial tile layer to the map
// use L.tileLayer(tileattributes)
// .addTo(mapObject)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add a marker to the map
var marker = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello from Atlanta, GA, USA!" //hoverable text
    }
).addTo(myMap)

// add a popup to the marker as well - makes the marker clickable
marker.bindPopup("Hello from Atlanta, GA, USA!"); 

// draw a circle around GA Tech - 33.7756° N, 84.3963° W
// use L.circle()
L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        fillColor: "yellow",
        radius: 500,
        fillOpacity: .80 // always numher between 0 and 1
    }
).bindPopup("Hello from GA Tech!")
.addTo(myMap); 
// zoom in and youll see it!

//draw a rectangle starting at ponce city market -> 33.7728, -84.3656
// use L.rectangle()
L.rectangle(
    [
        // specify the start and end of the rectangle 
        [33.7728, -84.3656],
        [33.7718, -84.3646]
    ],
    {
        color: "black",
        fillColor: "red",
        stroke: true,
        weight: 2 // thickness of line
    }
)
.bindPopup("Rectangle near Ponce City Market")
.addTo(myMap)
// zoom in to see

// use a polyline to draw a line from mercedes benz stadium to 
// statefarm arena -> 33.7553° N, 84.4006° W.  33.7573° N, 84.3963° W
L.polyline([
    [33.7553, -84.4006],
    [33.7573, -84.3963]
],
    {
        color: "red"
    }  
).addTo(myMap);

// draw a polygon around chateau elan - 34.1018° N, 83.8177° W
// use L.polygon() to draw a rectangle
L.polygon(
    [
        [34.1018, -83.8177],
        [34.1008, -83.8177],
        [34.1008, -83.8157]
    ],
    {
        color: "black",
        fillColor: "orange",
        fillOpacity: 0.8
    }
)
.bindPopup("Trianlge near-ish Chateau Elan")
.addTo(myMap);