const centerLat = 59.1294;
const centerLong = 11.23537;

let mapMain = L.map("map-container", {
  center: [centerLat, centerLong],
  zoom: 13,
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: `<a href="https://openstreetmap.prg/copyright">Open street map</a>`,
}).addTo(mapMain);
L.marker([centerLat, centerLong]).addTo(mapMain);
