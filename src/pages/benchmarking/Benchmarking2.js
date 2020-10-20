import React, { Component } from 'react';
import "./estilo.css"
import "./tarjeta.css"
import Barra from '../../components/navbar-publica/Barra';
import Button from '@material-ui/core/Button';

// data
import { formularios } from '../../formularios.json';

// subcomponents
import Pop from './Pop';
import Carousel from './Carousel';
import im1 from '../../imagenes/negocios4.jpg'
import im2 from '../../imagenes/negocios1.jpg'
import im3 from '../../imagenes/negocios5.jpg'
import GreenButton from '../../components/greenButton/GreenButton';

class Benchmarking2 extends Component {
  constructor() {
    super();
    this.state = {
      formularios
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }


  handleAddTodo(form) {
    this.setState({
      formularios: [...this.state.formularios, form]
    })
  }

  render() {
    const formularios = this.state.formularios.map((form, i) => {
      
      return (
        <div className="col-md-4" key={i}>
          <div className="tarjeta card mt-4 mb-4 pt-3 ">
            <div className="card-title text-center">
              <h3>{form.formName}</h3>
              <span className="badge badge-pill badge-danger ml-auto">
                {form._id}
              </span>
            </div>
            <div className="card-body">
              {form.formDescription}
            </div>
            <div className="card-footer ">
              {/* <button 
                type="button" 
                className="btn btn-primary" 
                data-toggle="modal" 
                data-target={"#"+form._id}>
                Abrir
              </button> */}
              <GreenButton
                nombreBoton="Abrir"
                data_target={form._id}
                data_toggle="modal"
              />
              <Pop 
                titulo={form.formName} 
                descripcion={form.formDescription} 
                id={form._id}>
              </Pop>
            </div>
          </div>
        </div>
        
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App fondo">
        <Barra
          cantFormularios = {this.state.formularios.length}
        ></Barra>
        
        <Carousel
          imagen1={im1}
          imagen2={im2}
          imagen3={im3}
        ></Carousel>
        <div className="container">
          <div className="row mt-4">

            <div className="col-md-12">
              <div className="row">
                {formularios}
              </div>
            </div>
          </div>
          
        </div>
        </div>
    );
  }
}

export default Benchmarking2;
