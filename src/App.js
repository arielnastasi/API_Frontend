import React from 'react';

import PrincipalHeader from './vista/PrincipalHead';
import PrincipalBody from './vista/PrincipalBody';
import PrincipalFooter from './vista/PrincipalFooter';

import './App.css';


function App() {
  return (
    <React.Fragment>
      <PrincipalHeader/>
      <PrincipalBody/>
      <PrincipalFooter/>
    </React.Fragment>
  );
}

export default App;
