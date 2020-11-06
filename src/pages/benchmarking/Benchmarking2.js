import React, { Component } from 'react';
import "./estilo.css"
import "./tarjeta.css"
import Barra from '../../components/navbar-publica/Barra';

// data
import { formularios } from '../../formularios.json';

// subcomponents
import Pop from './Pop';
import Carousel from './Carousel';
import im1 from '../../imagenes/negocios4.jpg'
import im2 from '../../imagenes/negocios1.jpg'
import im3 from '../../imagenes/negocios5.jpg'


class Benchmarking2 extends Component {
  constructor() {
    super();
    this.state = {
      formularios:[]
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  async componentDidMount() {
    /*http://localhost:8001*/
		const res = await fetch('https://interactivas-backend.herokuapp.com/api/forms/getForms', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
		});
		const data = await res.json();
		//this.state.hideLoading = true;
    console.log(data.forms);
    this.handleAddTodo(data.forms);
	}


  handleAddTodo(form) {
    this.setState({
      formularios: form
    })
  }

  render() {
    const formularios = this.state.formularios.map((form, i) => { 
      return (
        <div className="col-md-4" key={i}>
          <div className="tarjeta card mt-4 mb-4 pt-3 ">
            <div className="card-title text-center">
              <h3>{form.name}</h3>
              <span className="badge badge-pill badge-danger ml-auto">
                {form._id}
              </span>
            </div>
            <div className="card-body">
              {form.sector}
            </div>
            <div className="card-footer ">
              <button 
                type="button" 
                className="btn btn-info" 
                data-toggle="modal" 
                data-target={"#"+form._id}>
                Abrir
              </button>
              <Pop 
                titulo={form.name} 
                descripcion={form.sector} 
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
