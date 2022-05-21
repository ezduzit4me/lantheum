import React from 'react';
import {Helmet} from "react-helmet";
import styled from "styled-components";
import CookieConsent from "react-cookie-consent";

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



export default function AboutPage() {
  return (
    
    <div className="App">

      <Helmet>
       <link rel="stylesheet" href="./css/slides.min.css" />
       <script src="./js/slides.min.js" type="text/javascript"/>
       <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, viewport-fit=cover"/>
	      <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="description" content="Medical Marketing Services for Auistralia and Overseas." />
        
      </Helmet>
      
      
      <body class="slides noPreload animated"></body>

      <section className="slide fade-6 kenBurns">
  <div className="content">
    <div className="container">
      <div className="wrap">

        <div className="fix-12-12">
          <ul className="flex left">
            <li className="col-6-12 fromBottomLeft">
              <p className="opacity-6 margin-bottom-2 ae-1">&nbsp;</p>
              <h1 className="ae-2">LANTHEUM</h1>
                         
                              <a href="https://lantheum.net/about"><Button>About Us</Button></a>&nbsp;
                              <a href="https://lantheum.net/services"><Button>Services</Button></a>
                          <div className="ae-3"><p className="opacity-8">Principal Michael Warrener BSc MBA</p></div>
                          <div className="ae-3"><p className="opacity-8">Marketing Expertise</p></div>
                          <div className="ae-3"><p className="opacity-8">- Specialist in Medical Startups </p></div>
                          <div className="ae-3"><p className="opacity-8">- Australia and Overseas</p></div>
              <ul className="flex">
                

                   
                <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">Office</h3>
                  <p className="tiny opacity-6">138A/3 Sailors Bay Rd<br/>Northbridge 2063<br/>Australia</p>
                </li>


                 <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">Contact</h3>
                  <p className="tiny opacity-6">michael@lantheum.com.au<br/>+61 417 096 727</p>
                </li>
              </ul>
            </li>
            <li className="col-1-12">&nbsp;</li>
            <li className="col-5-12 cell-28 ae-1">
                
            </li>
            
          </ul>
        </div>
          
        </div>
      </div>
    </div>
  
  <div className="background" style={{backgroundImage:"url('https://lantheum.s3.ap-southeast-2.amazonaws.com/lantheum_home.jpg')"}}></div>
</section>

<section>
<div>
<CookieConsent
  location="bottom"
  buttonText="Accept and Continue"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>Manage Cookies :O</span>
</CookieConsent>

</div>


</section>
 

  </div>    
    
  );
}
