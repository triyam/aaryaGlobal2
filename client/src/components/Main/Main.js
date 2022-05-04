import React from 'react'
import Topics from './Topics';
import GolfMan from './GolfMan';
import Order from './Order';
import Map from './Map';
import MaterialForm from './MaterialForm';
import MaterialForm2 from './MaterialForm2';
import advanceSearch from '../../assets/img/main/advanced-search.svg';

const Main = () => (
    <>
    
    <main id="main">
    
    <section id="advanced_search">
      <img src={advanceSearch} alt="advanced-search"/>
    </section>


   
<div className="d-flex justify-content-around mt-5 flex-wrap">
<MaterialForm/>
  <MaterialForm2/>
</div>
  {/* <Carousel/> */}
    <Map/>

    <Order/>

    <GolfMan/>

    <Topics/>
  </main>
    
    </>
  )

export default Main



 