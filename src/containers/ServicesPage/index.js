import React from 'react';
import {Helmet} from "react-helmet";
import styled from "styled-components";
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



export default function ServicesPage() {
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
              <p className="opacity-6 margin-bottom-2 ae-1">Dependability</p>
              <h1 className="ae-2">Lantheum Services</h1>
                          
                            
                              <a href="https://lantheum.net/"><Button>Home</Button></a>&nbsp;
                              <a href="https://lantheum.net/news"><Button>News</Button></a>&nbsp;
                              <a href="https://lantheum.net/about"><Button>About</Button></a>&nbsp;
                             
                          <div className="ae-3"><p className="opacity-8">&nbsp;</p></div>
              <ul className="flex">
                <li className="col-6-12 ae-3">
                  <h3 className="margin-top-3">Introductions</h3>
                  <p className="tiny opacity-6">With more than two decades experience in our staff Lantheum can be your entry to the innovative field of &nbsp;theranostics</p>
                </li>
                <li className="col-6-12 ae-4">
                  <h3 className="margin-top-3">TGA Approvals</h3>
                  <p className="tiny opacity-6">European and Australian experience in TGA &nbsp;approvals</p>
                </li>
                <li className="col-6-12 ae-5">
                  <h3 className="margin-top-3">Asia and The Pacific</h3>
                  <p className="tiny opacity-6">Allow us to help you navigate this complex region</p>
                </li>
                <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">Marketing Communications</h3>
                  <p className="tiny opacity-6">As a start up why employ a full time marketeer when we can get your product out there at a fraction of the &nbsp;cost. We can assist in Branding and Scientific Visualisation</p>
                </li>

                   
                <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">Polling</h3>
                  <p className="tiny opacity-6">Allow us to poll and interview our Doctor and Specialist database to confirm market acceptance of your &nbsp;product. Allow us to worry about the detail</p>
                </li>


                 <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">Location</h3>
                  <p className="tiny opacity-6">We are conveniently located in an inner northern suburb of Sydney, Northbridge. Come and talk to &nbsp;us.</p>
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
  
  <div className="background" style={{backgroundImage:"url('https://lantheum.s3.ap-southeast-2.amazonaws.com/background_services.jpg')"}}></div>
</section>

 

  </div>    
    
  );
}
