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
    "wikipedia":"https://en.wikipedia.org/wiki/Upper_West_Side"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ 151.209444,-33.865 ]
    },
    "properties": {
    "name":"Sydney Austrailia",
    "wikipedia":"https://en.wikipedia.org/wiki/Sydney"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -73.961944,40.8075 ]
    },
    "properties": {
    "name":"Columbia University",
    "wikipedia":"https://en.wikipedia.org/wiki/Columbia_University"
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
      mentions: feature.properties.mentions,
      lines: feature.properties.lines,
      wikipedia: feature.properties.wikipedia,
      // Create an L.latLng object out of the GeoJSON coordinates.
      // Remember that in GeoJSON, the coordinates are reversed
      // (longitude, then latitude).
      latLng: L.latLng(feature.geometry.coordinates[1], feature.geometry.coordinates[0])
    };
  });
  // Now create a Leaflet feature group made up of markers for each
  // object in couldBeFeatures.
  couldBeLayer = L.featureGroup(couldBeFeatures.map(function(feature){
  let popupContent, lines;
  popupContent = "<h4>" + feature.name + "</h4>";
  if (feature.lines.length > 1){
    lines = "lines " + feature.lines.join(" and ");
  } else {
    lines = "line " + feature.lines[0];
  }
  popupContent = popupContent + feature.name + " is mentioned on " + lines + ".<br />";
  popupContent = popupContent + "Read about " + feature.name + " on <a href='"+ feature.wikipedia + "'>Wikipedia</a>.";
  return L.circleMarker(feature.latLng, {
    radius: 10 * Math.sqrt(feature.mentions),
    color: "#d33682",
    fillColor: "#d33682"
    }).bindPopup(popupContent);
  });
);
  // Add the layer to the map.
  couldBeLayer.addTo(map);
  // Redraw the map so that all the markers are visible.
  map.fitBounds(couldBeLayer.getBounds());
  // Zoom out one level to give some padding.
  map.zoomOut(1);

  // Define and assign a Markdown-it renderer.
  let placesArray;
   placesArray = [
     {text: "Columbus", tab: "Columbus", html: "Columbus"},
     {text: "Columbia University", tab: "Columbia_University", html: "Columbia University"},
     {text: "Dansville", tab: "Dansville", html: "Dansville"},
     {text: "Sydney", tab: "Sydney", html: "Sydney"},
     {text: "Upper West Side", tab: "Upper_West_Side", html: "Upper West Side"},
     {text: "Watertown", tab: "Watertown", html: "Watertown"}
]
  let md;
  md = window.markdownit({html: true}).use(window.markdownitFootnote);
  ["Upper_West_Side", "Columbus",
    "Columbia_University", "Sydney",
    "Dansville", "Watertown"].forEach(function(tab){
    // Create a variable tab that has the name as a string.
    $.ajax({
      url: "https://vanessa-lu.github.io/javascripting-english-major-project/" + tab + ".md",
      success: function(sample_text){
        // Read in the poem.
        let html;
        // Use the Markdown-it renderer I defined last chapter.
        html = md.render(sample_text);
        $("#sample_text").html(html);
        // Once the poem is in, start the loop.
        couldBeFeatures.forEach(function(feature){
          $("#sample_text").html(function(_, oldHtml){
            // Define two new variables, lat and lng.
            let regex, newHtml;
            // Assign the the regex the value of feature.html and the
            // flag “g”. This is the equivalent to /Hastings Street/g.
            regex = RegExp(feature.html, "g");
            // Fill in newHtml with the properties from the couldBeFeatures.
            newHtml = "<a href='#' data-tab='" +
              feature.tab +
              "' data-lat='" +
              feature.latLng.lat +
              "' data-lng='" +
              feature.latLng.lng +
              "'>" + feature.html + "</a>";
            // Return the newHtml wherever `replace()` finds the value
            // of regex.
            return oldHtml.replace(regex, newHtml);
          });
        });
      }
    });
    $("#sample_text a").click(function(){
  let tab, lat, lng;
  tab = $( this ).data("tab");
  $("#tabs-nav a[href='#" + tab + "']").tab("show");
  lat = $( this ).data("lat");
  lng = $( this ).data("lng");
  map.panTo([lat, lng]);
});
$("#tabs-nav a[href='#" + $( this ).data("tab") + "']").tab("show");
