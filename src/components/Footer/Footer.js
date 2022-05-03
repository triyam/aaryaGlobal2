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
      <Link to="/commingsoon">About US</Link>
      <span>|</span>
      <Link to="/commingsoon">ゴルフ場・宿泊・観光地の登録について</Link>
      <span>|</span>
      <Link to="/commingsoon">利用規約</Link>
      <span>|</span>
      <Link to="/commingsoon">プライバシー</Link>
      <span>|</span>
      <Link to="/commingsoon">行政・観光協会の皆様へ</Link>
      <span>|</span>
      <Link to="/commingsoon">お問合せ</Link>
      <span>|</span>
      <Link to="/commingsoon">企業情報</Link>
      <span>|</span>
      <Link to="/commingsoon">キャンセルポリシー</Link> 
    </div>
    <div className="copyright">
      <p>copyright (c)  all rights reserved.</p>
    </div>
  </footer>

      </div>
      
      </>
  )

export default Footer