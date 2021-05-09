var mymap = L.map('map').setView([48.86, 2.3488000], 13);

L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    minZoom: 0,
    maxZoom: 19,
}).addTo(mymap);


// Localisation

//mymap.locate({setView: true, maxZoom: 16, enableHighAccuracy: true});

function onLocationFound(e) {

    L.marker(e.latlng).addTo(mymap);

    mymap.stopLocate()
}

function onLocationError(e) {
    alert(e.message);
}

mymap.on('locationerror', onLocationError);

mymap.on('locationfound', onLocationFound);

var markers = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return new L.DivIcon({ html: '<div><span>' + cluster.getChildCount() + '</span></div>', className: 'toilet-cluster', iconSize: new L.Point(40, 40) });
	}
})




var ToiletIcon = L.icon({
    iconUrl: "images/restroom.png", 
    iconSize: [40,40]
})

var loc = [];

fetch('./data/sanisettesparis.geojson')
    .then(results => { data = results.json()
        .then(data => {
            features = data["features"]
            for (n in features){
                loc.push(features[n]["geometry"]["coordinates"])
            }
            for (lglat in loc){
                lL = L.latLng(loc[lglat][0][1],loc[lglat][0][0])
                try{
                    markers.addLayer(L.marker(lL, {icon: ToiletIcon}));
                }
                catch(err) {
                    console.log(err)
                    console.log(lL)
                }
            }
            console.log('OK')
            mymap.addLayer(markers);
        })
    
    })







