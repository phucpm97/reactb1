import React from 'react'
import logo from './img/sp_iphoneX.png';

export default function Smartphone () {
  return (
    <div>
       <section id="smartphone" className="container-fluid pt-5 pb-5 smartPhone__header">
  <h1 className="text-white text-center "type="color">BEST SMARTPHONE</h1>
  <div className="row">
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top" src={logo} alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">iPhone X</h4>
            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
            <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </div>
        </div>
      </div>
    </div>
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top" src={logo} alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">iPhone X</h4>
            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
            <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </div>
        </div>
      </div>
    </div><div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top" src={logo} alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">iPhone X</h4>
            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
            <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </div>
        </div>
      </div>
    </div><div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
      <div className="container">
        <div className="card bg-light" style={{width: 300}}>
          <img className="card-img-top"src={logo} alt="Card image" style={{maxWidth: '100%', height: 250}} />
          <div className="card-body text-center">
            <h4 className="card-title text-center">iPhone X</h4>
            <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
            <a href="#" className="btn btn-primary">Detail</a>
            <a href="#" className="btn btn-danger">Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}
