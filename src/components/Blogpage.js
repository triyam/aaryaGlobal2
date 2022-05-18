import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header';

const Blogpage = () => {
  return (
    <>
      <Header />
      <div
        className="row align-items-center"
        style={{
          paddingLeft: '10px',
          paddingTop: '150px',
          paddingBottom: '150px',
        }}
      >
        <div className="col-6 col-md-6">
          <div className="">
            <img
              style={{ borderRadius: '20px' }}
              src="https://thumbs.dreamstime.com/b/close-up-golf-ball-tee-iron-let-s-golf-today-109091504.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="col-6 col-md-6">
          <div>
            <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore, nostrum.</h1>
            <br/>
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis molestias culpa ratione. Voluptatum
              necessitatibus tempora optio porro ipsum cupiditate quidem doloribus ut labore. Voluptas tempora voluptate
              consequatur nam dolorem reiciendis facilis recusandae similique velit, voluptates fugiat fuga incidunt
              numquam doloremque non vel molestias beatae natus odit eligendi suscipit consectetur debitis.
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogpage;
