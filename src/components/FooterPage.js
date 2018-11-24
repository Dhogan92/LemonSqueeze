import React from "react";

class FooterPage extends React.Component {
render() {
return (
<div>
  <footer className="text-center">
        <img id="api-logo" className="foot-icon" src={`https://www.themoviedb.org/assets/1/v4/logos/312x276-primary-blue-fb50dee3bf664c866fd216e6cee64af33d20707ea3091ddc65c5e8aa4c152eb2.png`} alt="The Movie Database"/>
        <i className="devicon-bootstrap-plain colored bs-icon"/>
        <i className="devicon-nodejs-plain-wordmark colored node-icon"/>
        <i className="devicon-babel-plain babel-icon"/>
        <i className="devicon-react-original colored react-icon"></i>
          
      
     
   
      
  </footer>
  
</div>
);
}
}

export default FooterPage;