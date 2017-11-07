let firstMap, tileLayer;
firstMap = L.map("first-map");
tileLayer =
  L.tileLayer("https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png", {
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> &copy;<a href='http://carto.com/attribution'>CARTO</a>",
    subdomains: "abcd",
    maxZoom: 18
  });
tileLayer.addTo(firstMap);
firstMap.setView([40.74571, -73.97183], 16);
let startPoint;
startPoint = L.marker([40.74571, -73.97183]);
startPoint.addTo(firstMap);
startPoint.bindPopup("This is the starting point.");
let startPointtwo;
startPointtwo = L.marker([40.75916, -73.98644]);
startPointtwo.addTo(firstMap);
startPointtwo.bindPopup("This is the starting point 2.");
let derivejounrey, derivejourneyMarker;
let tenThousandth, tenThousandthPolygon, thousandth, thousandthPolyline;
let thousandth1, thousandthPolyline1;

derivejounrey = L.latLng(40.74571, -73.97183);
derivejourneyMarker = L.marker(derivejounrey).addTo(firstMap);
thousandth = [[derivejounrey.lat, derivejounrey.lng],
              [40.745706, -73.972129],
              [40.752706, -73.967192],
              [40.75181, -73.96533],
              [40.75243, -73.96472],
              [40.75519, -73.97129],
              [40.75077, -73.97447],
              [40.75207, -73.97764],
              [40.75236, -73.97747],
              [40.75217, -73.97708],
              [40.75382, -73.97580],
              [40.75340, -73.97468],
              [40.75525, -73.97335],
              [40.75597, -73.97490],
              [40.75909, -73.97262],
              [40.76003, -73.97481]];
thousandthPolyline = L.polyline(thousandth, {color: "#d33682"}
                      ).addTo(firstMap);

thousandth1 = [[40.75916, -73.98638],
              [40.75859, -73.98511],
              [40.75605, -73.98698],
              [40.75483, -73.98412],
              [40.75225, -73.98180],
              [40.75098, -73.98273],
              [40.75233, -73.98592],
              [40.75174, -73.98653],
              [40.75213, -73.98743],
              [40.74830, -73.98820],
              [40.74722, -73.98554],
              [40.74661, -73.98592],
              [40.74518, -73.98279],
              [40.74147, -73.98545],
              [40.74215, -73.98708],
              [40.74186, -73.98816],
              [40.74183, -73.98897],
              [40.73714, -73.99035],
              [40.73653, -73.98906],
              [40.73614, -73.99000],
              [40.73575, -73.98979],
              [40.73516, -73.99022],
              [40.73490, -73.99077],
              [40.73526, -73.99168],
              [40.73441, -73.98996],
              [40.73360, -73.98983],
              [40.73266, -73.98773],
              [40.73077, -73.98906],
              [40.73129, -73.99035],
              [40.73077, -73.98906],
              [40.72957, -73.98987],
              [40.72866, -73.98768],
              [40.72804, -73.98816],
            ];
thousandthPolyline1 = L.polyline(thousandth1, {color: "#ff00ff"}
                      ).addTo(firstMap);
