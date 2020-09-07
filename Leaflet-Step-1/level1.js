// code for creating Basic Map (Level 1)
// Store our API endpoint inside queryUrl
const queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_month.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function(data) {
    console.log(data.features);
    // Using the features array sent back in the API data, create a GeoJSON layer and add it to the map
    createFeatures(data.features)  
  });

function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  function onEachFeature(feature, layer) {
    layer.bindPopup(`<h3>Earthquake: ${feature.properties.place}</h3><hr>
                     <h4>Time: ${new Date(feature.properties.time)}</h4><hr>
                     <h4>Magnitude: ${feature.properties.mag}</h4><hr>
                     <h4>Significance: ${feature.properties.sig}</h4>`);
  }

  // Create function to make circles instead of default markers where earthquakes occur
  function makeCircles (feature, latlng) {
    let color;
    //if statements to filter through significance and determine circle color
    if (feature.properties.sig < 250){
      color = '#f7f2ed'
      }
    else if (feature.properties.sig < 500) {
      color = '#f6d2af'
      }
    else if (feature.properties.sig < 750) {
      color = '#f49a70'
      }
    else if (feature.properties.sig < 1000) {
      color = '#de5e21'
      }
    else {
      color = '#b63a00'
    }

    let options ={radius: (Math.exp(feature.properties.mag/1.01-0.13))*1000,
                  color: color,
                  weight: 0.5,
                  fillColor: color,
                  fillOpacity: 0.5 
                 }
    return L.circle( latlng, options);
  }
  
  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array
  const earthquakes = L.geoJSON(earthquakeData, {
    pointToLayer: makeCircles,
    onEachFeature: onEachFeature
  });

  // Sending our earthquakes layer to the createMap function
  createMap(earthquakes);
}


function createMap(earthquakes) {

// Adding tile layer
  const darkMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  })

   // Create a map object
   const myMap = L.map("map", {
    center: [0, 0],
    zoom: 3,
    layers: [darkMap,earthquakes]
  });

  //Setup Legend
  function getColor(d) {
    return d > 1000  ? '#b63a00' :
           d > 750   ? '#de5e21' :
           d > 500   ? '#f49a70' :
           d > 250   ? '#f6d2af' :
                       '#f7f2ed';
  }

  const legend = L.control({position: 'bottomright'});

  legend.onAdd = function () {

      const div = L.DomUtil.create('div', 'info legend'),
          sigrange = [0, 250, 500, 750, 1000],
          labels = [];
      
      div.innerHTML += '<h4>EQ Significance</h4><hr>';
      // loop through our eq sig intervals and generate a label with a colored square for each interval
      for (var i = 0; i < sigrange.length; i++) {
          div.innerHTML +=
              '<i style="background:' + getColor(sigrange[i] + 1) + '"></i> ' +
              sigrange[i] + (sigrange[i + 1] ? '&ndash;' + sigrange[i + 1] + '<br><br>' : '+');
      }
          
      return div;    
  };

  legend.addTo(myMap);

}