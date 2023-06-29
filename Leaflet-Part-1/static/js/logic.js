// URL for 7 days all earthquakes
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Query data

d3.json(url).then(function(data){
    createFeature(data.features)
});

// ---------------------------------------------------------------------

function createFeature(earthquakedata){

    function pointToLayer(feature, latlng){

        let lmarkers = L.latLng([feature.geometry.coordinates[1], feature.geometry.coordinates[0]]);

            function circleColor(depth){
                if(depth < 10) return "#fff2e6";
                else if (depth < 30) return "#ffb366";
                else if (depth < 50) return "#b35900";
                else if (depth < 70) return "#cc0000";
                else if (depth < 90) return "#9900ff";
                else return "#52527a";
            };
            
            function circleSize(mag){
                return mag * 3.5;
            };

            let geomarkerstyle = {
                stroke: false,
                fillOpacity:0.8,
                radius: circleSize(feature.properties.mag),
                fillColor: circleColor(feature.geometry.coordinates[2])
                };

        return L.circleMarker(lmarkers, geomarkerstyle);
        // }
    }

    let earthquakes = L.geoJson(earthquakedata, {
        pointToLayer: pointToLayer}).
        bindPopup(function(layer){
            return "<h2>" + layer.feature.properties.place + "</h2><hr><h3> Magnitude: " + layer.feature.properties.mag + "<br><br> Depth: " + layer.feature.geometry.coordinates[2] + "</h3>"});
               
    createMap(earthquakes);
};

    // ----------------------------------------------------------------------
    function createMap(earthquakes){

        // Create base layers
        let streetlayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          });
    
    
        let topolayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
          });
    
        // Create baseMap object
        let baseMap = {
            "Street Map": streetlayer,
            "Topographic Map": topolayer
        };
    
        // Create OvelayMap Object
        let overlayMap = {
            "Earthquake": earthquakes
        };
    
        // Create Default Map
        let myMap = L.map("map",{
            center: [-10.09, 115.21],
            zoom: 3.5,
            layers: [streetlayer, earthquakes]
        });
    
        // Create layer control
        L.control.layers(baseMap, overlayMap, {
            collapsed: false
        }).addTo(myMap);

        // Create legend
        let legends = L.control({position: 'bottomright'});

        legends.onAdd = function(){
            let div = L.DomUtil.create('div', 'legend');
            
            div.innerHTML = [
                "<h2>Depth (km) </h2>",
                "<ul class= 'labels'>",
                "<li><span style ='background: #fff2e6;'></span>-10 to 10 </li>",
                "<li><span style ='background: #ffb366;'></span> 10 to 30 </li>",
                "<li><span style ='background: #b35900;'></span> 30 to 50 </li>",
                "<li><span style ='background: #cc0000;'></span> 50 to 70 </li>",
                "<li><span style ='background: #9900ff;'></span> 70 to 90 </li>",
                "<li><span style ='background: #52527a;'></span> 90+ </li>",
                "</ul>"
            ].join("");
            
              return div

        };
        legends.addTo(myMap);
    
    };

