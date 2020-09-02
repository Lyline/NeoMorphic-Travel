var hotel ={"Mountain Resort": {lat :21.3340, lon:-157.9185, price: '$ 200'}};

var carte = L.map('hotelMap').setView([21.3340,-157.9185],15);

L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
  attribution: 'données <a href="//osm.org/copyright">Openstreetmap</a>ODbL -rendu <a href="//openstreetmap.fr">OSM France</a>',
  minZoom: 12,
  maxZoom: 15
}).addTo(carte);

var marker =L.marker([21.3340,-157.9185]).addTo(carte);;
