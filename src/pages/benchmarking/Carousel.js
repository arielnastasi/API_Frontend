import React, { Component } from 'react';
import './Carousel.css'

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <div className="posicion">
                      <img src={this.props.imagen1} alt='Norway'  className="d-block w-100"/>
                      <div className="text-block">
                      <h3 align="center">LA FUNDACIÓN</h3>    
                        <p className="parrafo" align="left">La Fundación Observatorio PyME es una entidad sin fines de lucro, 
                        cuya misión es promover la valorización cultural del rol de las pequeñas y medianas empresas
                         en la sociedad, la investigación microeconómica aplicada y las políticas públicas de apoyo 
                         al desarrollo productivo.</p>
                      </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      
                      <div className="posicion">
                      <img src={this.props.imagen2} alt='Norway'  className="d-block w-100"/>
                      <div className="text-block">
                        <h3 align="left">¿Quienes somos?</h3>
                        <p className="parrafo" align="left">Conocé nuestro equipo de trabajo haciendo clic <a href="https://www.observatoriopyme.org.ar/la-fundacion/equipo-de-trabajo/">aquí</a></p>
                        
                        
                      </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      
                      <div className="posicion">
                      <img src={this.props.imagen3} alt='Norway'  className="d-block w-100"/>
                      <div className="text-block-right">
                        <h3 align="left">Seleccioná el formulario que mejor se</h3>
                        <h3 align="left">ajuste a las necesidades de tu empresa</h3>
                        <p className="parrafo" align="left">Recordá que podés filtrarlos en función al sector que pertenezcas</p>
                        
                      </div>
                      </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                  <span className="sr-only">Next</span>
                </a>
              </div>
        )
    }
}
export default Carousel;