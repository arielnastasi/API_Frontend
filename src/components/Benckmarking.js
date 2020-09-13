import React from 'react';
import MediaCard from './MediaCard';

const Benchmarking = () => {
    return (
        // <div className="container-xl">
        //     <MediaCard titulo="Formulario 1" />
        //     <MediaCard titulo="Formulario 1" />
        //     <MediaCard titulo="Formulario 1" />
        //     <MediaCard titulo="Formulario 1" />
        // </div>
        <div className="card-deck d-flex justify-content-center align-items-center mx-5 mt-5">
            <MediaCard titulo="Formulario 1" />
            <MediaCard titulo="Formulario 2" />
            <MediaCard titulo="Formulario 3" />
        </div>
    );
}

export default Benchmarking;