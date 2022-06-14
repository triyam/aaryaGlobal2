import React from 'react';
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
        <img src={advanceSearch} alt="advanced-search" />
      </section>

      {/* <div className="d-flex justify-content-around mt-5 flex-wrap"> */}
      <div className="row" >
        <div className="col-lg-6 col-md-6 col-12">
        <MaterialForm />
        </div>
        <div className="col-lg-6 col-md-6 col-12">
        <MaterialForm2 />
        </div>
      </div>
      {/* <Carousel/> */}
      <Map />

      <Order />

      <GolfMan />

      <Topics />
    </main>
  </>
);

export default Main;
