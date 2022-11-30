import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Logotdd from "./logos/tdd"


class Header extends Component {
  render() {
    if (!this.props.data) return null;


    // const logoheader = "images/" + this.props.data.image1;
    const description = this.props.data.description;
    const daniel = this.props.data.description;
    const miguel = this.props.data.description;
    const santigo = this.props.data.description;
    const juan = this.props.data.description;
    
    return (
      <header id="home">
    <ParticlesBg type="cobweb" color="3352FF" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Quienes somos
              </a>
            </li>

            {/* <li>
              <a className="smoothscroll" href="#portfolio">
                Nuestros servicios
              </a>
            </li> */}
            
            <li>
              <a className="smoothscroll" href="#resume">
                Marcas
              </a>
            </li>

          

            <li>
              <a className="smoothscroll" href="#contact">
                Contactos
              </a>
            </li>
          
            {/* <li>
              <a href="#">Soporte<span class="fa fa-angle-down"></span></a>
              <ul>
                <li><a href="#">Pilar diseño</a></li>
                <li><a href="#">Pilar ventas</a></li>
                <li><a href="#">Pilar marketing</a></li>
                <li><a href="#">Pilar desarrollo</a></li>
              </ul>  
            </li>   */}

          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              {/* <img  
                  src={logoheader}
                  alt="Logo transparente"
                  
              ></img>  Adicion para poner el logo en el header// Linea 6 */}
               <div class="inner">  
               <div class="kronos"><Logotdd/></div>
               
               </div>
            

              {/* <h1 className="responsive-headline">{name}</h1> */}
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
               
                <a href="https://main.d1as6rhcbvybw2.amplifyapp.com/" className="button btn project-btn" >
                  <i className="fa fa-book"></i>Daniel Ordoñez
                </a>                
                <a href={juan} className="button btn project-btn">
                  <i className="fa fa-book"></i>Juan Ordoñez
                </a>
                <a href="https://github.com/santiagomendoza514/CRUD.git" className="button btn project-btn">
                  <i className="fa fa-book"></i>santigo Mendoza
                </a>
                <a href="https://github.com/miguelocodefu/crudusers-miguelpinzon.git" className="button btn project-btn">
                  <i className="fa fa-book"></i>Miguel Pinzon
                </a>
              </ul> 
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
