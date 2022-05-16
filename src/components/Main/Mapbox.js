import React, { useRef, useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
// eslint-disable-next-line import/no-unresolved
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import jpMap from '../../assets/img/main/jpmap.png'

mapboxgl.accessToken = 'pk.eyJ1IjoiYWFyeWFnbG9iYWwiLCJhIjoiY2wybXNydW5rMHZ0dDNicWN6OXk0OW9iYSJ9.sLWQvg-i51poM7WO4eOlqw';


const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [142.8235, 43.6203]
      },
      properties: {
        title: 'Mapbox',
        description: 'Hokaido 1, Japan'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [142.8535, 43.1203]
      },
      properties: {
        title: 'Mapbox',
        description: 'Hokaido 2, Japan'
      }
    }
  ]
};


export default function Mapbox() {
  const navigate = useNavigate();
  const mapContainer = useRef(null);
  const [markerLngLat, setMarkerLngLat] = useState([138.2529, 36.2048]);
  const [mapObject, setMap] = useState();


useEffect(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: markerLngLat,
    zoom: 7,
  });

  setMap(map);
  // add markers to map
  // eslint-disable-next-line no-restricted-syntax
  for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

  new mapboxgl.Marker(el)
  .setLngLat(feature.geometry.coordinates)
  // .setPopup(
  //   new mapboxgl.Popup({ offset: 25 }) // add popups
  //     .setHTML(
  //       `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>
  //       <Link to="/login">Login</Link>
  //       `
  //     )
  // )
  .addTo(map);
  el.addEventListener('click', () => 
  { 
     // eslint-disable-next-line no-alert
    //  alert("Marker Clicked.");
    navigate("/login");
  }
)

}
},[]);

function setMapCenter(coords) {
  if (mapObject) {
    mapObject.setCenter(coords);
  }
}

  return (
    <>

    <div>
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div> */}
      <div ref={mapContainer} className="map-container" />
    </div>
    <div className="map_and_form ">
      
      <div className="map_search_form">
         <img src={jpMap} alt=""/>

         <a id="area_0" href="#/" onClick={() => setMapCenter([142.8635, 43.2203])}>HOKKAIDO</a>
         <a id="area_1" href="#/" onClick={() => setMapCenter([141.1500, 39.1362])}>TOHOKU</a>
         <a id="area_2" href="#/" onClick={() => setMapCenter([136.8115, 34.8586])}>CHUBU</a>
         <a id="area_3" href="#/" onClick={() => setMapCenter([139.6911, 36.4599])}>KANTO</a>
         <a id="area_4" href="#/" onClick={() => setMapCenter([133.6947, 35.0806])}>CHUGOKU</a>
         <a id="area_5" href="#/" onClick={() => setMapCenter([135.5629, 34.6413])}>KANSAI</a>
         <a id="area_6" href="#/" onClick={() => setMapCenter([134.5550, 34.0704])}>CHIGOKU</a>
         <a id="area_7" href="#/" onClick={() => setMapCenter([130.8000, 32.5900])}>KYUSYU</a>
         <a id="area_8" href="#/" onClick={() => setMapCenter([127.8056, 26.3344])}>OKINAWA</a>

      </div>          
    </div>
   
    </>
  );
}
