import React from 'react'
import {
  Link
} from "react-router-dom";

import Logo3 from '../../assets/img/main/logo-3.png';

const Footer = () => (
      <>
      
      <div>

      <footer id="footer">
    <img src={Logo3} alt="" />
    <div className="footer_nav">
    <Link className="left" to="/lorem" state={{ title: "About US" }}>About US</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "ゴルフ場・宿泊・観光地の登録について" }}>ゴルフ場・宿泊・観光地の登録について</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "利用規約" }}>利用規約</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "プライバシー" }}>プライバシー</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "行政・観光協会の皆様へ" }}>行政・観光協会の皆様へ</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "お問合せ" }}>お問合せ</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "企業情報" }}>企業情報</Link>
      <span>|</span>
      <Link className="left" to="/lorem" state={{ title: "キャンセルポリシー" }}>キャンセルポリシー</Link> 
    </div>
    <div className="copyright">
      <p>copyright (c)  all rights reserved.</p>
    </div>
  </footer>

      </div>
      
      </>
  )

export default Footer