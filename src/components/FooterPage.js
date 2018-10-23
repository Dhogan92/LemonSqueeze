import React from "react";
import { Grid, Col, Row, } from "react-bootstrap";

class FooterPage extends React.Component {
render() {
return (
<div>
  <footer fluid className="text-center">
    
        <p id="footer-title">Powered By</p>
        <img id="api-logo" class="foot-icon" src={`https://www.themoviedb.org/assets/1/v4/logos/312x276-primary-blue-fb50dee3bf664c866fd216e6cee64af33d20707ea3091ddc65c5e8aa4c152eb2.png`} alt="The Movie Database"/>
        <i class="devicon-bootstrap-plain colored bs-icon"/>
        <i class="devicon-nodejs-plain-wordmark colored node-icon"/>
        <i class="devicon-babel-plain babel-icon"/>
        <i class="devicon-react-original colored react-icon"></i>
          
      
     
   
      
  </footer>
  
</div>
);
}
}

export default FooterPage;