function onLocationFound(e) {

    let locIcon = L.icon({
        iconUrl: "images/loc.png",
        iconSize: [20,20],
        iconAnchor: [10,10],
        popupAnchor: [0,-13]
    });

    Loc = e.latlng;

    L.marker(e.latlng, {icon: locIcon}).addTo(mymap);

    mymap.stopLocate();
}

function onLocationError(e) {
    alert(e.message);
}

function displaytoilets(){
    ToiletMarkers = L.markerClusterGroup.layerSupport({
        iconCreateFunction: function(cluster) {
            return new L.icon({
                iconUrl: "images/toilettesTAS.png",
                iconSize: [40,40],
                iconAnchor: [20,20]
            });	
        }, 
        chunkedLoading: true
    });
    
    const ToiletIcon = L.icon({
        iconUrl: "images/toilettesNC.png", 
        iconSize: [30,30], 
        iconAnchor: [15,15],
        popupAnchor: [0,-13]
    });
    
    
    async function fetchToiletsData() {
        const loc = [];
        const features = (await (await fetch('./data/toilettesPARIS.geojson')).json()).features;
        for (let feature of features){
            const element = [];
            element.push(...feature.geometry.coordinates);
            element.push(feature.properties.horaire);
            loc.push(element);
        }
        for (let locEl of loc){
            const lL = L.latLng(locEl[0][1], locEl[0][0]);
            try{
                ToiletMarkers.addLayer(L.marker(lL, {icon: ToiletIcon}).bindPopup(`<b>Toilettes</b><br>Horaires : + ${locEl[1]} <br> ${createGoButton(lL)}`).on('click', function() {this.openPopup();}).on('popupopen', updatePopup));
            }
            catch(err) {
                console.log(err);
                console.log(lL);
            }
        }
        mymap.addLayer(ToiletMarkers);
    }
    
    
    fetchToiletsData();
};

function displayFontaines() {
    FontaineMarkers = L.markerClusterGroup.layerSupport({
        iconCreateFunction: function(cluster) {
            return new L.icon({
                iconUrl: "images/fontaineTAS.png",
                iconSize: [40,40],
                iconAnchor: [20,20]
            });
        }
    });
    
    const FontaineIcon = L.icon({
        iconUrl: "images/fontaineNC.png", 
        iconSize: [30,30],
        iconAnchor: [15,15],
        popupAnchor: [0,-13]
    });
    
    
    async function fetchFontainesData() {
        const loc = [];
        const features = (await (await fetch('./data/fontainesPARIS.geojson')).json()).features;
        for (let feature of features){
            const element = [];
            element.push(...feature.geometry.coordinates);
            element.push(feature.properties.dispo);
            loc.push(element);
        }
        for (let locEl of loc){
            const lL = L.latLng(locEl[1], locEl[0]);
            try{
                FontaineMarkers.addLayer(L.marker(lL, {icon: FontaineIcon}).bindPopup(`<b>Fontaine</b><br>Disponible : ${locEl[2]} <br> ${createGoButton(lL)}`).on('click', function() {this.openPopup();}).on('popupopen', updatePopup));
            }
            catch(err) {
                console.log(err);
                console.log(lL);
            }
        }
        mymap.addLayer(FontaineMarkers);
    }
    
    
    fetchFontainesData();
}

function displatParking() {
    ParkingMarkers = L.markerClusterGroup.layerSupport({
        iconCreateFunction: function(cluster) {
            return new L.icon({
                iconUrl: "images/parkingTAS.png",
                iconSize: [40,40],
                iconAnchor: [20,20],
                popupAnchor: [0,-13]
            });	
        }
    });
    
    const ParkingIcon = L.icon({
        iconUrl: "images/parkingNC.png", 
        iconSize: [30,30], 
        iconAnchor: [15,15]
    });
    
    async function fetchParkingData() {
        const loc = [];
        const elements = (await (await fetch('./data/parkingIDF.json')).json()).elements;
        for (let element of elements){
            const parking = [];
            if (element.type == "way") {
                parking.push(element.center.lat);
                parking.push(element.center.lon);
            } else {
                parking.push(element.lat);
                parking.push(element.lon);
            }
            try{
                let capacity = element.tags.capacity;
                if (capacity == undefined){
                    parking.push('inconnue');
                } else {
                    parking.push(capacity);
                }
            } catch {
                parking.push('inconnue');
            };

            
           loc.push(parking);
        }
        for (let locEl of loc){
            try{
                const lL = L.latLng(locEl[0], locEl[1]);
                ParkingMarkers.addLayer(L.marker(lL, {icon: ParkingIcon}).bindPopup(`<b>Parking a v??lo</b><br>Nombre de places : ${locEl[2]} <br> ${createGoButton(lL)}`).on('click', function() {this.openPopup();}).on('popupopen', updatePopup));

            }
            catch(err){
                console.log(err);
                console.log(locEl)
            }
        }
        mymap.addLayer(ParkingMarkers);
    }
    fetchParkingData();
}

function displayPompes(){
    PumpMarkers = L.markerClusterGroup.layerSupport({
        iconCreateFunction: function(cluster) {
            return new L.icon({
                iconUrl: "images/outilsTAS.png",
                iconSize: [40,40],
                iconAnchor: [20,20]
            });
        }
    });
    
    const PumpIcon = L.icon({
        iconUrl: "images/outilsNC.png", 
        iconSize: [30,30], 
        iconAnchor: [15,15],
        popupAnchor: [0,-13]
    });
    
    async function fetchPumpData() {
        const loc = [];
        const elements = (await (await fetch('./data/pompesIDF.json')).json()).elements;
        for (let element of elements){
            const parking = [];
            if (element.type == "way") {
                parking.push(element.center.lat);
                parking.push(element.center.lon);
            } else {
                parking.push(element.lat);
                parking.push(element.lon);
            }
            loc.push(parking);
        }
        for (let locEl of loc){
            
            const lL = L.latLng(locEl[0], locEl[1]);
            try{
                PumpMarkers.addLayer(L.marker(lL, {icon: PumpIcon}).bindPopup(`<b>Pompes ou outils de r??paration</b>') <br> ${createGoButton(lL)}`).on('click', function() {this.openPopup();}).on('popupopen', updatePopup));
            }
            catch(err) {
                console.log(err);
                console.log(lL);
            }
        }
        mymap.addLayer(PumpMarkers);
    }
    fetchPumpData();
}

function createGoButton(coordinates){
    return `<a target="_blank" href="https://geovelo.fr/paris/route?to=${coordinates.lng},${coordinates.lat}&from=">Y aller</a>`;
}

function updatePopup(event){

    var clickedItem = event.target;

    var popupContent = clickedItem.getPopup().getContent();

    var popupContentARRAY = popupContent.split("&from=");

    popupContent = popupContentARRAY[0] + "&from=" + Loc.lng + "," + Loc.lat + popupContentARRAY[1];

    clickedItem.setPopupContent(popupContent);
}

const mymap = L.map('map').setView([48.86, 2.3488000], 13);

L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 0,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);

var PumpMarkers;
var ParkingMarkers;
var FontaineMarkers;
var ToiletMarkers;
var Loc;

// Localisation
mymap.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});

L.control.scale().addTo(mymap);

mymap.on('locationerror', onLocationError);

mymap.on('locationfound', onLocationFound);

displaytoilets(); 
displayFontaines();
displayPompes();
displatParking();


var overlays = {
    "Parkings ?? v??lo": ParkingMarkers,
    "Pompes": PumpMarkers,
    "Fontaines": FontaineMarkers,
    "Toilettes": ToiletMarkers,
};
new L.Control.Layers(null,overlays).addTo(mymap);