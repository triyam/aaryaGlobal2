import React from 'react'
import Mapbox from './Mapbox';

const Map = () => (
    <>
    <section id="map">
      <div className="container" >

        <div className="section-title map_section_title">
          <div id="map_section_bottom">
            <p id="map_section">エリアから検索</p>
            <span id="coner_a" />
            <span id="coner_b" />
          </div>
        </div>
      
        <Mapbox/>
   
        </div>
    </section>
    </>
  )

export default Map

