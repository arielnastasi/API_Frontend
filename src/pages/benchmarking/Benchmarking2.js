import React, { Component } from 'react';
import "./estilo.css"
import "./tarjeta.css"
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import Barra from '../../components/navbar-publica/Barra';
import SimpleDialog from '../../components/SimpleDialog';


// subcomponents
import Carousel from './Carousel';
import im1 from '../../imagenes/negocios4.jpg'
import im2 from '../../imagenes/negocios1.jpg'
import im3 from '../../imagenes/negocios5.jpg'
import GreenButton from '../../components/greenButton/GreenButton';
import { Typography } from '@material-ui/core';


class Benchmarking2 extends Component {
  constructor() {
    super();
    this.state = {
      formularios: [],
      open: false,
      selectedValue: ''
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  async componentDidMount() {
    const res = await fetch('https://interactivas-backend.herokuapp.com/api/forms/getForms', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await res.json();
    this.handleAddTodo(data.forms);
  }


  handleAddTodo(form) {
    this.setState({
      formularios: form
    })
  }

  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };

  handleClose = (value) => {
    this.setState({
      open: false
    })
    this.setState({
      selectedValue: value
    });
  };

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
              <GreenButton
                nombreBoton='Abrir'
                startIcon={<QuestionAnswerOutlinedIcon />}
                onClick={this.handleClickOpen} />
              <div>
                <br />
                <SimpleDialog selectedValue={this.state.selectedValue}
                  open={this.state.open} onClose={this.handleClose}
                  questionList={form.questionList}
                />
              </div>
            </div>
          </div>
        </div>

      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App fondo">
        <Barra
          cantFormularios={this.state.formularios.length}
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
