import React from 'react';


export default function Promtion() {
  return (
    <div>
      <section id="promotion" className="container-fluid pt-5 pb-5 Promotion_header">
  <h1 className="text-center text-white">PROMOTION</h1>
  <div className="container bg-light pt-5 pb-5">
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-4">
        <div className="container">
          <img src={'image/promotion_1.png'} alt style={{maxWidth: '100%'}} />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4">
        <div className="container">
          <img  src={'image/promotion_2.png'} alt style={{maxWidth: '100%'}} />
        </div>
      </div>
      <div className="col-xs-12 col-sm-12 col-md-4">
        <div className="container">
          <img  src={'image/promotion_3.jpg'} alt style={{maxWidth: '100%'}} />
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
