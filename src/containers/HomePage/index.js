import React from 'react';
import styled from "styled-components";
import './../../App.css';
import {Helmet} from "react-helmet";



const theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
    }
  };

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
    theme: "blue"
  };

  
class App extends React.Component {
  render() {
    
      return (
         <div className="App">

    
    
<Helmet>
  <title> Fican Guitars - Play The Difference</title>
       <link rel="stylesheet" href="./css/slides.min.css" />
       <script src="./js/slides.min.js" type="text/javascript"/>
       <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
	      <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="Fican High performance guitars made from Australian and Pacific tonewoods - designed to last your lifetime - Freight Free globally." />
        <meta charset="UTF-8" />
      </Helmet>
      
      
      <body class="slides noPreload animated"></body>
      

      
<section className="slide fade-6 kenBurns" >
      
  <div className="content">
    <div className="container">
      <div className="wrap">
      
        <div className="fix-12-12">
          <ul className="flex left">
            <li className="col-6-12 fromBottomLeft">
              <p className="opacity-6 margin-bottom-2 ae-1">&nbsp;</p>
              <h1 className="ae-2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LANTHEUM</h1>
              <h1 className="ae-2">Marketing Expertise</h1>
              <div className="ae-3"><p className="opacity-8">&nbsp;   Specialist in medical startups</p></div>			 
              <div className="ae-3"><p className="opacity-8">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Australia and Overseas.</p></div>
              <ul className="flex">
              <li className="col-6-12 ae-3">
                  <h3 className="margin-top-3">&nbsp;</h3>
                  <ul>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  <li>&nbsp;</li>
                  </ul>
                </li>
                <li className="col-6-12 ae-12">
		  <h3 className="margin-top-3">&nbsp;</h3>
                  <p className="tiny opacity-6">&nbsp;</p>
                  <p className="tiny opacity-6">&nbsp;</p>
                  
                  <p className="tiny opacity-6">&nbsp;</p>
                 
                  
                  
		  </li>
                <li className="col-6-12 ae-4">
                  <h3 className="margin-top-3">&nbsp;</h3>
                  <p className="tiny opacity-6">&nbsp;</p>
                </li>
                <li className="col-6-12 ae-5">
                <h3 className="margin-top-3">Michael Warrener Bsc Mba</h3>
                  <p className="tiny opacity-6">&nbsp;&nbsp;michael@lantheum.com.au<br/>&nbsp;&nbsp;&nbsp;&nbsp;+61 417 096 727</p>
                </li>
                <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">&nbsp;</h3>
                  <p className="tiny opacity-6">&nbsp;</p>
                </li>
				
                
		<li className="col-6-12 ae-9">
                  <h3 className="margin-top-3">&nbsp;</h3>
                  <p className="tiny opacity-6">&nbsp; </p>
		</li>
    <li className="col-6-12 ae-9">
                  <h3 className="margin-top-3">Address</h3>
                  <p className="tiny opacity-6">138A/3 Sailors Bay Rd<br/>NORTHBRIDGE 2063<br/>Australia</p>
		</li>
		<li className="col-6-12 ae-10">
                  <h3 className="margin-top-3">&nbsp;</h3>
                  <p className="tiny opacity-6">&nbsp;</p>
                  
                
                  
                
                </li>
                 
		

                  

      
	
		
     
		 


              </ul>
            </li>
            <li className="col-1-12">&nbsp;</li>
            <li className="col-5-12 bottom">
              
              <div className="videoThumbnail shadow rounded popupTrigger margin-bottom-3 ae-7" data-popup-id="89-1">
              <a href="https://www.ficanguitars.com/stingray"><img src="https://lantheum.s3.ap-southeast-2.amazonaws.com/lantheum_mike_logo.jpg" data-action="zoom" className="shadow rounded ae-8" alt="Stingray"/></a>
              </div>



            </li>
          </ul>
        </div>
        
      </div>
    </div>
  </div>
  <div className="background" style={{backgroundImage:"url('img/background/workshop_1400.jpg')"}}></div>

</section>















    </div>
    
     
  );
 }
}
export default App;
