import React from 'react';

import PrincipalHeader from './vista/principal/js/PrincipalHead';
import PrincipalBody from './vista/principal/js/PrincipalBody';
import PrincipalFooter from './vista/principal/js/PrincipalFooter';
import Sesion from './vista/sesion/js/Sesion';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <PrincipalHeader/>
      <PrincipalBody/>
      <PrincipalFooter/>


      {/* <Sesion/> */}

    </React.Fragment>
  );
}

export default App;
