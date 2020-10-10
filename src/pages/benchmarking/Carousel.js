import React, { Component } from 'react';

class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src={this.props.imagen1}  alt='First slide' className="d-block w-100"/>
                        
                    </div>
                    <div className="carousel-item">
                      <img src={this.props.imagen2}  alt='First slide' className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                      <img src={this.props.imagen3}  alt='First slide' className="d-block w-100"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
        )
    }
}
export default Carousel;