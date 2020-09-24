# leaflet-challenge
Homework #14

# USGS Earthquake Map

This applications is a Leaflet map that plots all earthquakes tracked by the USGS from the last 30 days with a magnitude of 1 or greater by their longitude and latitude.  Earthquakes with higher magnitudes appear larger and those with higher significance appear darker in color.

![alt text](https://github.com/mbradbe06/leaflet-challenge/blob/master/Leaflet-Step-1/pictures/leafletss1.jpg "Earthquake Map")

-------------------------------------------------------------------------------------------------------------------------------

A legend for Earthquake significance is also provided and can be found in the lower right corner of the visual - it looks like this:
![alt text](https://github.com/mbradbe06/leaflet-challenge/blob/master/Leaflet-Step-1/pictures/leafletss2.jpg "Significance Legend")

## Significance Factors:

#### Location
---------------------
This one is kind of obvious—an earthquake that hits in a populated area is more likely to do damage than one that hits an unpopulated area or the middle of the ocean.

#### Magnitude
---------------------
Scientists assign a number to represent the amount of seismic energy released by an earthquake. The Richter magnitude scale, as it is known, is logarithmic, so each step up represents an increase in energy of a factor of 10. The more energy in an earthquake, the more destructive it can be.

#### Depth 
---------------------
Earthquakes can happen anywhere from at the surface to 700 kilometers below. In general, deeper earthquakes are less damaging because their energy dissipates before it reaches the surface.

#### Distance from the epicenter 
---------------------
The epicenter is the point at the surface right above where the earthquake originates and is usually the place where the earthquake's intensity is the greatest.

#### Local geologic conditions 
---------------------
The nature of the ground at the surface of an earthquake can have a profound influence on the level of damage. Loose, sandy, soggy soil, like in Mexico City, can liquefy if the shaking is strong and long enough, for example. That doesn't bode well for any structures on the surface.

#### Secondary effects 
--------------------
Earthquakes can trigger landslides, fires, floods or tsunamis.

#### Architecture
-------------------
Even the strongest buildings may not survive a bad earthquake, but architecture plays a huge role in what and who survives a quake.

#### Mapbox API
------------------
A mapbox API key is needed to render the map and will need to be edited into the config.js file.
