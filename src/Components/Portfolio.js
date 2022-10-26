import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";


let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    const resumeDownload = this.props.data.resumedownload;
    const informacion = this.props.data.informacion;
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Nuestros servicios.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
              <div className="columns-download">
              <h1>{informacion}</h1>  
              <p>
                  <a href={resumeDownload} rel="noreferrer" target="_blank" className="button">
                  <i className="fa fa-download"></i> Download Resume
                  </a>
              </p>
              </div>   
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
