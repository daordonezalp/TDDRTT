import React, { Component } from "react";
import Logo1 from "./logos/amazon";
import Logo2 from "./logos/jira"
import Logo3 from "./logos/apple"
import Logo4 from "./logos/docker"
import Logo5 from "./logos/python"
import Logo6 from "./logos/logoreact"
//import Logo7 from "./logos/asering"
class Resume extends Component {
 

  render() {
    if (!this.props.data) return null;

   

    

  

    return (
      <section id="resume">
        <div class="inner">
          <div class="logo"><Logo1/></div>
          <div class="logo"><Logo2/></div>
          <div class="logo"><Logo3/></div>
          <div class="logo"><Logo4/></div>
          <div class="logo"><Logo5/></div>
          <div class="logo"><Logo6/></div>
          {/* <div class="logo"><Logo7 color="black" background-color="#000000"/></div> */}
      
        </div>
        
      </section>
    );
  }
}

export default Resume;
