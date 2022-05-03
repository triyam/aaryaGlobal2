import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import Carousel from "react-elastic-carousel";
import k from "../assets/img/main/k.svg";
import recoSubTtl from "../assets/img/main/reco_sub_ttl.svg";
import lastSlide from "../assets/img/main/last_sldie.png";

import '../assets/css/style.css'

// import ReactDOM from "react-dom";
import CarouselItem from "./CarouselItem";

import toppageHeaderText from "../assets/img/main/toppage-header-text.svg";
// import smallSlider1 from "../assets/img/main/small_slider_1.png";
// import smallSlider2 from "../assets/img/main/small_slider_2.png";
// import smallSlider3 from "../assets/img/main/small_slider_3.png";
// import smallSlider4 from "../assets/img/main/small_slider_4.png";
// import smallSlider5 from "../assets/img/main/small_slider_5.png";
// import smallSlider6 from "../assets/img/main/small_slider_6.png";

const HeaderSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
      <div>
        <section id="hero" className="d-flex align-items-center">
          {/* <div className="container-fluid" data-aos="zoom-out" data-aos-delay="100"> */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 header-text-container">
                    <img src={toppageHeaderText} alt="toppage-header-text" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="slider-container">
            <div className="owl-carousel clients-carousel">
              <img src={smallSlider1} alt="" />
                        <img src={smallSlider2} alt="" />
                        <img src={smallSlider3} alt="" />
                        <img src={smallSlider4} alt="" />
                        <img src={smallSlider5} alt="" />
                        <img src={smallSlider6} alt="" />
            </div>
          </div> */}

          <div className="mene-container-1">
            <Link to="/commingsoon">ゴルフ場or宿泊orレンタカー</Link>
            <span />
            <Link to="/commingsoon">都道府県</Link>
            <span />
            <Link to="/commingsoon">チェエクイン</Link>
            <span />
            <Link to="/commingsoon">チェックアウト</Link>
            <span />
            <Link to="/commingsoon">人数</Link>
          </div>

          <div className="menu-container-2">
            <Link className="right" to="/commingsoon">
              メンバー（カスタマー）登録
            </Link>
            <Link className="left" to="/commingsoon">
              ベンダー（ゴルフ場・宿泊先・観光情報）登録
            </Link>
          </div>

          <div className="dot-container">
            <span />
            <span id="has_color" />
            <span />
          </div>
        </section>

        {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleIndicators" data-slide-to={1} />
    <li data-target="#carouselExampleIndicators" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="..." alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="..." alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </a>
</div> */}

        <div>
          <Carousel breakPoints={breakPoints}>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img src={lastSlide} alt="" />
            </CarouselItem>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
