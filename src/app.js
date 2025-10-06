import * as Leaflet from 'leaflet';
 
console.log(Leaflet);

console.log('Hello world!');
import Leaflet from 'leaflet'; // import everything from leaflet
import 'leaflet/dist/leaflet.css'; // import leaflet css
 
const WBS = [52.457131, 13.54007]; // WBS coordinates
const map = Leaflet.map('map').setView(WBS, 13); // create a map object with a center and zoom level
const markerIcon = Leaflet.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconAnchor: [10, 20]
}); // There was an issue with the default marker icon, so we create a new one
Leaflet.marker(WBS, { icon: markerIcon }).addTo(map); // add a marker to the map at the WBS coordinates
 
Leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://google.com" target="_blank">Google</a>'
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map

const myLocations = [
  {
    name: 'Bergpark Wilhelmshöhe',
    location: [51.3155, 9.3981],
    description: 'UNESCO World Heritage park with Hercules monument and waterfalls'
  },
  {
    name: 'Hercules Monument',
    location: [51.3275, 9.3947],
    description: 'Iconic statue of Hercules overlooking Kassel'
  },
  {
    name: 'Orangerie in Karlsaue Park',
    location: [51.3087, 9.5106],
    description: 'Baroque orangery and museum in a large city park'
  },
  {
    name: 'GRIMMWELT Kassel',
    location: [51.3097, 9.4887],
    description: 'Museum dedicated to the Brothers Grimm and their fairy tales'
  },
  {
    name: 'Kassel Hauptbahnhof',
    location: [51.3214, 9.4976],
    description: 'Main train station in Kassel'
  }
];


// Add markers to the map with a popup
myLocations.forEach(location => {
  Leaflet.marker(location.location, { icon: markerIcon })
    .bindPopup(location.description)
    .addTo(map);
});

// Set the view to the bounds of all markers
const bounds = Leaflet.latLngBounds(myLocations.map(location => location.location));
map.fitBounds(bounds);