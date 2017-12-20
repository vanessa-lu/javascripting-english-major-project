let map, tileLayer;
map = L.map("could-be-map");
tileLayer = L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
              attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy; <a href='http://carto.com/attribution'>CARTO</a>",
              subdomains: "abcd",
              maxZoom: 18
            }).addTo(map);
map.setView([40.730833, -73.9975], 16);
// Define the Leaflet layer.
let couldBeLayer;
let couldBeFeatures;
let data;
data = {
   "type": "FeatureCollection",
   "features": [
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -82.983333,39.983333 ]
    },
    "properties": {
    "name":"Columbus, Ohio",
    "tab": "Columbus",
    "linkText": "Columbus",
    "wikipedia":"https://en.wikipedia.org/wiki/Columbus%2C_Ohio"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -84.303889,42.556389 ]
    },
    "properties": {
    "name":"Dansville Michigian",
    "tab": "Dansville",
    "linkText": "Dansville",
    "wikipedia":"https://en.wikipedia.org/wiki/Dansville,_Michigan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.975278,40.786944 ]
    },
    "properties": {
    "name":"W 80th Street (Upper West Side)",
    "tab": "Upper_West_Side",
    "linkText": "Upper West Side",
    "wikipedia":"https://en.wikipedia.org/wiki/Upper_West_Side"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [-73.978595, 40.72606]
    },
    "properties": {
    "name":"Pitt Street",
    "tab": "Pitt_Street",
    "linkText": "Pitt Street",
    "wikipedia":"https://en.wikipedia.org/wiki/Alphabet_City,_Manhattan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.0125,40.711667 ]
    },
    "properties": {
    "name":"World Trade Center",
    "tab": "World-Trade",
    "linkText": "World Trade Center",
    "wikipedia":"https://en.wikipedia.org/wiki/World_Trade_Center_(1973%E2%80%932001)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.99770319999999, 40.7358437 ]
    },
    "properties": {
    "name":"Greenwich Village",
    "tab": "Twelve_sixth",
    "linkText": "Greenwich Village",
    "wikipedia":"https://en.wikipedia.org/wiki/Greenwich_Village"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -74.002222, 40.745278 ]
    },
    "properties": {
    "name":"Chelsea",
    "tab": "Chelsea",
    "linkText": "Chelsea",
    "wikipedia":"https://en.wikipedia.org/wiki/Chelsea,_Manhattan"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -75.906389,43.975556 ]
    },
    "properties": {
      "name":"Watertown, NY",
      "tab": "Watertown",
      "linkText": "Watertown",
      "wikipedia":"https://en.wikipedia.org/wiki/Watertown_(city),_New_York"
    }
  }
]
};
// Iterate over the .features property of the GeoJSON object to
// create an array of objects (features), with every object’s
// properties as noted.
couldBeFeatures = data.features.map(function(feature){
  // This return returns an object.
  return {
    name: feature.properties.name,
    html: feature.properties.html,
    tab: feature.properties.tab,
    wikipedia: feature.properties.wikipedia,
    linkText: feature.properties.linkText,
    // Create an L.latLng object out of the GeoJSON coordinates.
    // Remember that in GeoJSON, the coordinates are reversed
    // (longitude, then latitude).
    latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
  };
});
  // Now create a Leaflet feature group made up of markers for each
  // object in couldBeFeatures.
couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){
  let popupContent;
  popupContent = "<h4>" + feature.name + "</h4>";
popupContent = popupContent + "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.";
  return L.circleMarker(feature.latLng, {
    radius: 5,
    color: "#d33682",
    fillColor: "#d33682"
    }).bindPopup(popupContent);
}));
// Add the layer to the map.
couldBeLayer.addTo(map);
// Redraw the map so that all the markers are visible.
map.fitBounds(couldBeLayer.getBounds());

// Define and assign a Markdown-it renderer.
let placesArray;
 placesArray = [
   {text: "Columbus", tab: "Columbus", html: "Columbus"},
   {text: "World Trade Center", tab: "World-Trade", html: "World Trade Center"},
   {text: "Dansville", tab: "Dansville", html: "Dansville"},
   {text: "Pitt Street", tab: "Pitt_Street", html: "Pitt Street"},
   {text: "Upper West Side", tab: "Upper_West_Side", html: "Upper West Side"},
   {text: "Watertown", tab: "Watertown", html: "Watertown"},
   {text: "Chelsea", tab: "Chelsea", html: "Chelsea"},
   {text: "Greenwich Village", tab: "Twelve_sixth", html: "Greenwich Village"}
];
let md;
md = window.markdownit({html: true}).use(window.markdownitFootnote);
["Upper_West_Side", "Columbus",
    "World-Trade", "Pitt_Street",
    "Dansville", "Watertown", "Chelsea", "Twelve_sixth"].forEach(function(tab){
  // Create a variable tab that has the name as a string.
  $.ajax({
    url: "https://vanessa-lu.github.io/javascripting-english-major-project/" + tab + ".md",
    success: function(markdownText){
      // Read in the markdown.
      let html;
      // Use the Markdown-it renderer I defined last chapter.
      html = md.render(markdownText);
      $("#" + tab).html(html);
      // Once the poem is in, start the loop.
      couldBeFeatures.forEach(function(feature){
        $("#" + tab).html(function(_, oldHtml){
          // Define two new variables, lat and lng.
          let regex, newHtml;
          // Assign the the regex the value of feature.html and the
          // flag “g”. This is the equivalent to /Hastings Street/g.
          regex = RegExp(feature.linkText, "g");
          // Fill in newHtml with the properties from the couldBeFeatures.
          newHtml = "<a href='#'" + feature.tab + "' data-tab='" +
            feature.tab +
            "' data-lat='" +
            feature.latLng.lat +
            "' data-lng='" +
            feature.latLng.lng +
            "'>" + feature.linkText + "</a>";
          // Return the newHtml wherever replace() finds the value
          // of regex.
          return oldHtml.replace(regex, newHtml);
        });
      });
      $("#" + tab + " a").click(function(){
        let target, lat, lng;
        target = $( this ).data("tab");
        $("#nav-tabs a[href='#" + target + "']").tab("show");
        lat = $( this ).data("lat");
        lng = $( this ).data("lng");
        map.flyTo([lat, lng], 12);
      });
    }
  });

  //$("#tabs-nav a[href='#" + $( this ).data("tab") + "']").tab("show");
});
