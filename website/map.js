const mymap = L.map('map').setView([48.86, 2.3488000], 13);

L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 0,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(mymap);


// Localisation

//mymap.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});

function onLocationFound(e) {

    L.marker(e.latlng).addTo(mymap);

    mymap.stopLocate();
}

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);

mymap.on('locationfound', onLocationFound);





const ToiletMarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return new L.DivIcon({ html: '<div><span>' + cluster.getChildCount() + '</span></div>', className: 'toilet-cluster cluster', iconSize: new L.Point(40, 40) });
	}
});

const ToiletIcon = L.icon({
    iconUrl: "images/restroom.png", 
    iconSize: [40,40], 
    iconAnchor: [20,20]
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
            ToiletMarkers.addLayer(L.marker(lL, {icon: ToiletIcon}).bindPopup('<b>Toilettes</b><br>Horaires : '+ locEl[1]));
        }
        catch(err) {
            console.log(err);
            console.log(lL);
        }
    }
    mymap.addLayer(ToiletMarkers);
}


fetchToiletsData();



const FontaineMarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return new L.DivIcon({ html: '<div><span>' + cluster.getChildCount() + '</span></div>', className: 'fountain-cluster cluster', iconSize: new L.Point(40, 40) });
	}
});

const FontaineIcon = L.icon({
    iconUrl: "images/fontaine.png", 
    iconSize: [40,40], 
    iconAnchor: [20,20]
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
            FontaineMarkers.addLayer(L.marker(lL, {icon: FontaineIcon}).bindPopup('<b>Toilettes</b><br>Disponible : '+ locEl[2]));
        }
        catch(err) {
            console.log(err);
            console.log(lL);
        }
    }
    mymap.addLayer(FontaineMarkers);
}


fetchFontainesData();


const ParkingMarkers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return new L.DivIcon({ html: '<div><span>' + cluster.getChildCount() + '</span></div>', className: 'parking-cluster cluster', iconSize: new L.Point(40, 40) });
	}
});

const ParkingIcon = L.icon({
    iconUrl: "images/parking2.png", 
    iconSize: [30,30], 
    iconAnchor: [15,15]
});

async function fetchParkingData() {
    const loc = [];
    const elements = (await (await fetch('./data/parkingIDF.json')).json()).elements;
    for (let element of elements){
        const parking = [];
        parking.push(element.lat);
        parking.push(element.lon);
        try 
        {
            parking.push(element.tags.capacity);
        }
        catch
        {
            parking.push('inconnue');
        }
        loc.push(parking);
    }
    for (let locEl of loc){
        const lL = L.latLng(locEl[0], locEl[1]);
        try{
            ParkingMarkers.addLayer(L.marker(lL, {icon: ParkingIcon}).bindPopup('<b>Parking a vélo</b><br>Nombre de places : '+ locEl[2]));
        }
        catch(err) {
            console.log(err);
            console.log(lL);
        }
    }
    mymap.addLayer(ParkingMarkers);
}
fetchParkingData();