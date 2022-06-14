import React, { useEffect, useState } from "react";

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import Carousel from 'react-elastic-carousel';
import k from '../assets/img/main/k.svg';
import recoSubTtl from '../assets/img/main/reco_sub_ttl.svg';
import lastSlide from '../assets/img/main/last_sldie.png';
import '../assets/css/style.css';

import CarouselItem from './CarouselItem';

import toppageHeaderText from '../assets/img/main/toppage-header-text.svg';
import Carousel from "./carousel";
import {bookItemList} from "./constants/book-list";

const HeaderSection = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  const [bookList, setBookList] = useState(bookItemList);

  return (
    <>
      <div>
        <section id="hero" className="d-flex align-items-center carousel-container">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10">
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 header-text-container">
                    <img src={toppageHeaderText} alt="toppage-header-text" />
                  </div>
                </div>
              </div>
                    {/* <div className="overlay">
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
                    </div> */}
            </div>
          </div>

          <div className="mene-container-1">
            <Link to="/lorem" state={{ title: 'ゴルフ場or宿泊orレンタカー' }}>
              ゴルフ場or宿泊orレンタカー
            </Link>
            <span />
            <Link to="/lorem" state={{ title: '都道府県' }}>
              都道府県
            </Link>
            <span />
            <Link to="/lorem" state={{ title: 'チェエクイン' }}>
              チェエクイン
            </Link>
            <span />
            <Link to="/lorem" state={{ title: 'チェックアウト' }}>
              チェックアウト
            </Link>
            <span />
            <Link to="/lorem" state={{ title: '人数' }}>
              人数
            </Link>
          </div>

          <div className="menu-container-2">
            <Link className="right" to="/lorem" state={{ title: 'メンバー（カスタマー）登録' }}>
              メンバー（カスタマー）登録
            </Link>
            <Link className="left" to="/lorem" state={{ title: 'ベンダー（ゴルフ場・宿泊先・観光情報）登録' }}>
              ベンダー（ゴルフ場・宿泊先・観光情報）登録
            </Link>
          </div>

          <div className="dot-container">
            <span />
            <span id="has_color" />
            <span />
          </div>
        </section>
        <div className="carousel-container">
          <div className="overlay">
            {/* <Carousel breakPoints={breakPoints}>
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
            </Carousel> */}
            <Carousel
              list={bookList}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSection;
