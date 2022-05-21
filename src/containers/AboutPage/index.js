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
              <p className="opacity-6 margin-bottom-2 ae-1">About</p>
              <h1 className="ae-2">Lantheum</h1>
                         
                              <a href="https://lantheum.net/"><Button>Home</Button></a>&nbsp;
                              <a href="https://lantheum.net/services"><Button>Services</Button></a>
                          <div className="ae-3"><p className="opacity-8">Principal Michael Warrener</p></div>
              <ul className="flex">
                <li className="col-6-12 ae-3">
                  <h3 className="margin-top-3">Pharmaceutical Experience</h3>
                  <p className="tiny opacity-6">Hoerchst, Glaxo.</p>
                </li>
                <li className="col-6-12 ae-4">
                  <h3 className="margin-top-3">Nucleid Freight Management</h3>
                  <p className="tiny opacity-6">Management and transportation of nuclear time-critical packages.</p>
                </li>
                <li className="col-6-12 ae-5">
                  <h3 className="margin-top-3">Nuclear Medicine</h3>
                  <p className="tiny opacity-6"> Sirtex, Oncasil, ANSTO</p>
                </li>
                <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">Government Security</h3>
                  <p className="tiny opacity-6">Appropriate security classification for ANSTO &nbsp;liaison</p>
                </li>

                   
                <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">International Experience</h3>
                  <p className="tiny opacity-6">Fluent German spoken. Principal in successful European &nbsp;startup</p>
                </li>


                 <li className="col-6-12 ae-6">
                  <h3 className="margin-top-3">TGA Approval</h3>
                  <p className="tiny opacity-6">Extensive experience in nuclear medicine &nbsp;startup</p>
                </li>
              </ul>
            </li>
            <li className="col-1-12">&nbsp;</li>
            <li className="col-5-12 cell-28 ae-1">
              <img src="https://lantheum.s3.ap-southeast-2.amazonaws.com/0M6A0295_mike_headshot.jpg" width="360" className="shadow rounded ae-8" alt="Fican Tornado" data-action="zoom"/>
            </li>
            
          </ul>
        </div>
          
        </div>
      </div>
    </div>
  
  <div className="background" style={{backgroundImage:"url('https://lantheum.s3.ap-southeast-2.amazonaws.com/lantheum_about.jpg')"}}></div>
</section>

 

  </div>    
    
  );
}
