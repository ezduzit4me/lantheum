
import React, { Component } from 'react';
import ReactGA from 'react-ga';
class App extends Component {
  render() {
    const gaTrackingId="UA-205554703-3";
      ReactGA.initialize(gaTrackingId);
      ReactGA,pageview("/");

    const myStyle={
        backgroundImage: 
 "url('https://lantheum.s3.ap-southeast-2.amazonaws.com/l_background_v2.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
      
      </div>
    );
  }
}
   
export default App;


