
import React, { Component } from 'react';
  
class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://lantheum.s3.ap-southeast-2.amazonaws.com/l_background.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <p>&nbsp</p>
      </div>
    );
  }
}
   
export default App;


