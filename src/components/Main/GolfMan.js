import React from 'react'
import {
  Link
} from "react-router-dom";

import polygon2 from '../../assets/img/main/Polygon 2.png'

const GolfMan = () => (
    <>
    <section id="golf_man">
      <div className="aboutus-container">
        <div className="header">
          <h3>About US</h3>
          <h4>私たちに関しては</h4>
        </div>
        <div className="content">
          <p>テキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキスト
            テキストテキストテキストテキストテキスト
            テキストテキストテキスト。</p>
            <Link to="/commingsoon">
              <p id="detail_btn">詳しくはこちら <img src={polygon2} alt=""/></p>
            </Link>
        </div>
      </div>      
    </section>
    </>
  )

export default GolfMan