import React, { Component } from 'react';

class Pop extends Component {
    
    render() {
        
        return (
            <div className="modal fade bd-example-modal-lg" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{this.props.titulo}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4 align="center">{this.props.descripcion}</h4>
                        
                    </div>
                    <div className="modal-body">
                        <p className="text-justify">Indique el tamaño de su empresa:</p>
                        <div className="text-md-left form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="pequeña" value="option1" checked></input>
                            <label className="form-check-label" for="pequeña">
                                Pequeña
                            </label>
                        </div>
                        <div className="text-md-left form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="mediana" value="option2"></input>
                            <label className="form-check-label" for="mediana">
                                Mediana
                            </label>
                        </div>
                            <br></br>
                            <p className="text-justify">Indique cómo ha evolucionado en su empresa la facturación total en pesos sin IVA, en el último trimistre (Enero-Febrero-Marzo 2020) en comparación con el trimestre anterior (Octubre-Noviembre-Diciembre 2019)</p>
                            <div className="text-md-left form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios2" id="aumento" value="option1" checked></input>
                                    <label className="form-check-label" for="aumento">
                                    Aumentó
                                    </label>
                                
                            </div>
                            <div className="text-md-left form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios2" id="no_vario" value="option2"></input>
                                    <label className="form-check-label" for="no_vario">
                                    Varió
                                    </label>
                            </div>
                            <div className="text-md-left form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios2" id="disminuyo" value="option2"></input>
                                    <label className="form-check-label" for="disminuyo">
                                    Disminuyó
                                    </label>
                            </div>
                            <br></br>
                            <p className="text-justify">Indique cómo ha evolucionado en su empresa la cartera de pedidos en el último trimistre (Enero-Febrero-Marzo 2020) en comparación con el trimestre anterior (Octubre-Noviembre-Diciembre 2019)</p>
                            <div className="text-md-left form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios3" id="aumento2" value="option1" checked></input>
                                    <label className="form-check-label" for="aumento2">
                                    Aumentó
                                    </label>
                                
                            </div>
                            <div className="text-md-left form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios3" id="no_vario2" value="option2"></input>
                                    <label className="form-check-label" for="no_vario2">
                                    Varió
                                    </label>
                            </div>
                            <div className="text-md-left form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios3" id="disminuyo2" value="option2"></input>
                                    <label className="form-check-label" for="disminuyo2">
                                    Disminuyó
                                    </label>
                            </div>
                            <br></br>
                            <form>
                                <h5 className="text-justify">Sólo te pediremos algunos datos...</h5>
                                
                                <div className="form-row">
                                    <div className="col-5">
                                        <input  type="email" className="form-control" placeholder="Correo Electrónico"></input>
                                    </div>
                                    <div className="col"> 
                                            <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                <option selected>Región...</option>
                                                <option value="1">CABA</option>
                                                <option value="2">Buenos Aires</option>
                                                <option value="3">Córdoba</option>
                                            </select>
                                    </div>
                                    <div className="col">
                                        <input type="text" className="form-control" placeholder="Razón Social"></input>
                                    </div>
                                </div>
                                <br></br>
                                <p className="text-justify">Tamaño de su empresa:</p>
                                <div className="form-check form-check-inline">    
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input>
                                    <label className="form-check-label" for="inlineRadio1">0-9 ocupados</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">10-50 ocupados</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">51-250 ocupados</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">251-800 ocupados</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input>
                                    <label className="form-check-label" for="inlineRadio2">Más de 800</label>
                                </div>

                            </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                        <button type="button" className="btn btn-primary">Obtener Resultado</button>
                    </div>
                    </div>
                </div>
                </div>
        )
    }
}
export default Pop;