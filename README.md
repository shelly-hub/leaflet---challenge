# leaflet---challenge

## Project Aim
This challenge is to develop world earthquake visualisation through the use of leaflet javascript library.

## Project Description
This project utilises earthquake data provided by United States Geological Survey (USGS). USGS has provided timely set of data in GeoJson format. The past 30 days set of earthquake data is chosen to be used in this challenge.

Two folders are created in this challenge named as Leaflet-Part-1 and Leaflet-Part-2.
 - Leaflet-Part-1 visualises just earthquake data
 - Leaflet-Part-2 visualises earthquake data points with tectonic plates boundaries

## Project Method
### Leaflet-Part-1: Earthquake data 
    1. GeoJson earthquake data provided from following website: https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
    2. Past 30 days and all earthquakes data are chosen to be used for API URL call
    3. The whole earthquake data which is particularly used is under section "feature" in the GEOJson format
    4. The Map contains following layer:
        - Street layer
        - Topograhic layer
        - Earthquake layer
          
    5. For Earthquake layer:
        - Circle markers are used using leaflet "pointToLayer" method
        - The size of circle markers depend on the magnitude of earthquake
        - The colour of earthquake is depend on depth of the earthquake
        - Depth of earthquake is presented as 3rd value within coordinates list
          
    6. The whole earthquake data under "feature" is to be imparted into leaflet function "L.geoJson" method
       
    7. Legend:
         - Edit legend in "style.css" to get desired style
  
 ### Leaflet-Part-2: Earthquake + Tectonic plates
    1. Data on tectonic plates can be found from following website:
      https://github.com/fraxen/tectonicplates
    
    2. Within the Github website:
        -  Go to GeoJson folder
        -  Select any of the json files (boundaries.json is used in this challenge)
        -  Click "Raw" button which direct to raw file, and copy the URL
           
     3. Call out tectonic plates data using "L.geoJson" method

 ### Libraries used in Javascript
  - Leaflet.js
  - D3.js
  - Leaflet.css

## References

display.(N.D). MDN web docs. Accessed on: 29/06/2023, from<https://developer.mozilla.org/en-US/docs/Web/CSS/display>

Using GeoJson with Leaflet - pointToLayer(). Leaflet. Accessed on: 29/06/2023, from<https://leafletjs.com/examples/geojson/>

HTML Color Picker.(2023).W3 Schools. Accessed on: 29/06/2023, from<https://www.w3schools.com/colors/colors_picker.asp>

Earthquakes on Leaflet.(10/10/2022).pbogden. Accessed on: 29/06/2023, from< https://observablehq.com/@pbogden/earthquakes-on-leaflet>

GeoJSON Summary Format.(N.D.). USGS - science for changing world. Accessed on: 29/06/2023, from<https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php>

