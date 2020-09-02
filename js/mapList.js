var hotelList = {
  "Le Grand Hotel": {lat :21.3381, lon:-157.9000, price: '$ 456'},
  "Mountain Resort": {lat :21.3340, lon:-157.9185, price: '$ 200'},
  "Hotel Venice Royal": {lat :21.3381, lon:-157.9100, price: '$ 198'},
  "Hotel Splendid": {lat :21.3300, lon:-157.9050, price: '$ 800'},
  "L'Hotel de la plage": {lat :21.3280, lon:-157.9000, price: '$ 463'},
  "L'Etape": {lat :21.3400, lon:-157.9185, price: '$ 230'},
  "...De Passage": {lat :21.3500, lon:-157.9185, price: '$ 50'}
};


  //initialisation carte
  var carte = L.map('maMap').setView([21.3381, -157.9186],13);  //setView -> [coordonnées ville], zoomInitial
  
  //chargement tuile
  L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{
    attribution: 'données <a href="//osm.org/copyright">Openstreetmap</a>ODbL -rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 13,
    maxZoom: 15
  }).addTo(carte);
  
  for (hotel in hotelList){
    var marker =L.marker([hotelList[hotel].lat, hotelList[hotel].lon]).addTo(carte);
    marker.bindPopup("<a href=\"../hotel/hotel.html\"><h4>"+[hotel]+"</h4><h5>"+hotelList[hotel].price+"</h5></a>");
  }


