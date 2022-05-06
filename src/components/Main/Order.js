import React from 'react'
import {
  Link
} from "react-router-dom";
import plan1 from '../../assets/img/main/plan-1.svg'
import spPlan from '../../assets/img/main/sp_plan.svg'
import planBtn1 from '../../assets/img/main/plan_btn_1.svg'
import planBtn2 from '../../assets/img/main/plan_btn_2.svg'

const Order = () => (
    <>
     <section id="order">
      <img id="plan" className="forPc" src={plan1} alt=""/>
      <img id="plan" className="forSp" src={spPlan} alt=""/>
      <Link className="left" to="/lorem" state={{ title: "詳しくはこちら" }}>
        <img id="plan_btn1" src={planBtn1} alt=""/>
      </Link>
      <Link className="left" to="/lorem" state={{ title: "詳しくはこちら" }}>
        <img id="plan_btn2" src={planBtn2} alt=""/>
      </Link>
    </section>
    </>
  )

export default Order