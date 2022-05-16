import React from 'react';
import {Helmet} from "react-helmet";




export default function AboutPage() {
  return (
    
    <div className="App">

      <Helmet>
       <link rel="stylesheet" href="./css/slides.min.css" />
       <script src="./js/slides.min.js" type="text/javascript"/>
       <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
	      <meta name="apple-mobile-web-app-capable" content="yes" />
        
        
      </Helmet>
      
      
      <body class="slides noPreload animated"></body>

      <section className="slide fade-6 kenBurns" >
  <div className="content">
    <div className="container">
      <div className="wrap">
      
        <div className="fix-10-12 toCenter">
          <h1 className="ae-1">Our Experience</h1>
          <p className="ae-2"><span className="opacity-8">Your imagination is the only limitation. If you would like Something special in guitar shape or finishes we can probably do it. For custom builds you will find our prices most reasonable</span></p>
        </div>
        <div className="fix-12-12">  
          <ul className="grid fixedSpaces grid-69 equal equalMobile popupTrigger controller" data-popup-id="69" data-slider-id="69" >
            <li className="col-4-12 col-tablet-1-2 col-phablet-1-1">
              <div className="box-69 rounded ae-3 equalElement selected" style={{backgroundImage:"url('img/roses_maddi_800.jpg')"}}>
                <div className="table cell-69 equalElement">
                  <div className="cell">
                    <h6 className="uppercase opacity-4 margin-bottom-1">From the different</h6>
                    <h3 className="cropBottom">Shadow &amp; Color</h3>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-4-12 col-tablet-1-2 col-phablet-1-1">
              <div className="box-69 rounded ae-4 equalElement" style={{backgroundImage:"url('img/bugs_800.jpg')"}}>
                <div className="table cell-69 equalElement">
                  <div className="cell">
                    <h6 className="uppercase opacity-4 margin-bottom-1">To The different</h6>
                    <h3 className="cropBottom">Another reasons To Purchase from Fican</h3>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-4-12 col-tablet-1-2 col-phablet-1-1">
              <div className="box-69 rounded ae-5 equalElement" style={{backgroundImage:"url('img/Green_lightning_800.jpg')"}}>
                <div className="table cell-69 equalElement">
                  <div className="cell">
                    <h6 className="uppercase opacity-4 margin-bottom-1">To the exotic</h6>
                    <h3 className="cropBottom">From our Lava &nbsp;Series</h3>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-4-12 col-tablet-1-2 col-phablet-1-1">
              <div className="box-69 rounded ae-6 equalElement" style={{backgroundImage:"url('img/left_hander_800.jpg')"}}>
                <div className="table cell-69 equalElement">
                  <div className="cell">
                    <h6 className="uppercase opacity-4 margin-bottom-1">Another Way</h6>
                    <h3 className="cropBottom">Left handers dont feel left out at Fican</h3>
               </div>
                </div>
              </div>
            </li>
            <li className="col-4-12 col-tablet-1-2 col-phablet-1-1">
              <div className="box-69 rounded ae-7 equalElement" style={{backgroundImage:"url('img/shark_800.jpg')"}}>
                <div className="table cell-69 equalElement">
                  <div className="cell">
                    <h6 className="uppercase opacity-4 margin-bottom-1">New Talent</h6>
                    <h3 className="cropBottom">Why look the same as everyone else</h3>
                  </div>
                </div>
              </div>
            </li>
            <li className="col-4-12 col-tablet-1-2 col-phablet-1-1">
              <div className="box-69 rounded ae-8 equalElement" style={{backgroundImage:"url('img/sun_800_reduce_IX.jpg')"}}>
                <div className="table cell-69 equalElement">
                  <div className="cell">
                    <h6 className="uppercase opacity-4 margin-bottom-1">Ancient Talent</h6>
                    <h3 className="cropBottom">The Sun - one of our Songline designs</h3>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="background" style={{backgroundImage:"url('img/background/img-69.jpg')"}}></div>
</section>

 </div>
      
    
  );
}

