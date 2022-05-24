import React from 'react'

import {
  Link
} from "react-router-dom";
import polygon2 from '../../assets/img/main/Polygon 2.png'
import k from '../../assets/img/main/k.svg'
import topicSubTtl from '../../assets/img/main/topic_sub_ttl.svg'

const Topics = () => (
    <>
    <section id="topics">
      <img id="k_1" src={k} alt=""/>
      {/* <div className="container" data-aos="fade-up"> */}
      <div className="container">
        <div className="section-title topic-header">
          <h2>Topics</h2>
          <img src={topicSubTtl} alt=""/>
        </div>

        <div className="row topics_cont_container"> 
            <div className="col-lg-9 col-md-7 col-sm-12">
              <p id="topic_cont_item"><span>2021年 4月 10日</span> テキストテキストテキストテキストテキストテキストテキスト</p>              
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12">
              <Link className="left" to="/lorem" state={{ title: "詳しくはこちら" }}>
                <p id="detail_btn">詳しくはこちら <img src={polygon2} alt=""/></p>
              </Link>
            </div> 

            <div className="col-lg-9 col-md-7 col-sm-12">
              <p id="topic_cont_item"><span>2021年 4月 10日</span> テキストテキストテキストテキストテキストテキストテキスト</p>              
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12">
              <Link className="left" to="/lorem" state={{ title: "詳しくはこちら" }}>
                <p id="detail_btn">詳しくはこちら <img src={polygon2} alt=""/></p>
              </Link>
            </div> 
        </div>

      </div>
    </section>
    </>
  )

export default Topics