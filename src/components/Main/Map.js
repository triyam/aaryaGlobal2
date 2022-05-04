import React from 'react'
import jpMap from '../../assets/img/main/jpmap.png'

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

        <div className="map_and_form">
        <iframe title="japanGoogleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7387992.664919662!2d136.03841352888332!3d36.89697710960899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34674e0fd77f192f%3A0xf54275d47c665244!2sJapan!5e0!3m2!1sen!2sin!4v1650807562973!5m2!1sen!2sin" width="600" height="535" style={{border:"0"}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade" />    
          <div className="map_search_form">
             <img src={jpMap} alt=""/>
             <a id="area_0" href="#/">HOKKAIDO</a>
             <a id="area_1" href="#/">TOHOKU</a>
             <a id="area_2" href="#/">CHUBU</a>
             <a id="area_3" href="#/">KANTO</a>
             <a id="area_4" href="#/">CHUGOKU</a>
             <a id="area_5" href="#/">KANSAI</a>
             <a id="area_6" href="#/">CHIGOKU</a>
             <a id="area_7" href="#/">KYUSYU</a>
             <a id="area_8" href="#/">OKINAWA</a>
          </div>          
        </div>

      </div>
    </section>
    </>
  )

export default Map