/* eslint-disable no-irregular-whitespace */
import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

import "../../assets/css/style.css";
import "../../assets/css/bootstrap-datepicker.css";

import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./Styles.css";


import recoSubTtl from "../../assets/img/main/reco_sub_ttl.svg";
import lastSlide from "../../assets/img/main/last_sldie.png";

const Reco = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <>
       <div className="section-title topic-header">
          <h2>Recommend</h2>
          {/* <img src={recoSubTtl} alt="" /> */}
        </div>
      <div>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
          <Item>
            <img src={lastSlide} alt="" />
          </Item>
        </Carousel>
      </div>

      <div className="button_list">
        <Link className="left" to="/lorem" state={{ title: "PR　バナー" }}>PR　バナー</Link>
        <span />
        <Link className="left" to="/lorem" state={{ title: "PR　バナー" }}>PR　バナー</Link>
        <span />
        <Link className="left" to="/lorem" state={{ title: "PR　バナー" }}>PR　バナー</Link>
        <span />
        <Link className="left" to="/lorem" state={{ title: "PR　バナー" }}>PR　バナー</Link>
        <span />
        <Link className="left" to="/lorem" state={{ title: "PR　バナー" }}>PR　バナー</Link> 
      </div>
    </>
  );
};

export default Reco;
