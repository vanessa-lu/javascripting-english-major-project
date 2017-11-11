let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
  L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy;<a href='http://carto.com/attribution'>CARTO</a>",
    subdomains: "abcd",
    maxZoom: 18
  });
  tileLayer.addTo(firstMap);
  firstMap.setView([40.730833, -73.9975], 16);
let bobstLibrary;
var obj = JSON.parse('{ "name":"John", "age":30, "lat":"40.729444", "long":-73.997222"}');
bobstLibrary = L.marker([obj.lat, obj.long]);
bobstLibrary.addTo(firstMap);
bobstLibrary.bindPopup("This is Bobst Library.");
