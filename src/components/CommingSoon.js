import React from 'react'
import commingSoon from '../assets/img/commingSoon.png'

const CommingSoon = () => {
  return (
    <>
    <div className="container" style={{marginTop:"10%"}}>
        <div className="row">
            <div className="col-lg-12">
                <img src={commingSoon} className="img-responsive center-block d-block mx-auto" alt="SampleImage"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default CommingSoon